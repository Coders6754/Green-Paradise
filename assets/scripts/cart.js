import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
import { getDatabase, ref, set, get } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiwRTYbPsBZukrBa_PCJrz9yVly6bAAVQ",
    authDomain: "plant-site-aac81.firebaseapp.com",
    databaseURL: "https://plant-site-aac81-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "plant-site-aac81",
    storageBucket: "plant-site-aac81.appspot.com",
    messagingSenderId: "1029613642800",
    appId: "1:1029613642800:web:4b431fb4e9adb5ce2439f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const uid = localStorage.getItem('uid');

let totalAmount = 0;
let discountedAmount = 0;
let subtotalAmount = 0;
const totalPriceElement = document.querySelector('#totalCartPrice');
const discountedAmountElement = document.querySelector('#discountPrice');

async function fetchUserDataAndProducts() {
    try {
        const userRef = ref(db, 'users/' + uid);

        const snapshot = await get(userRef);

        if (snapshot.exists()) {
            const userData = snapshot.val();
            const cartItems = userData.cartItems || [];
            const wishlistItems = userData.wishlistItems || [];

            const response = await fetch('https://inquisitive-cummerbund-duck.cyclic.app/products');
            const products = await response.json();
            // Filter
            const productsInCart = products.filter(product =>
                cartItems.some(cartItem => cartItem.productId === product.id)
            );
            const productsInWishlist = products.filter(product =>
                wishlistItems.includes(product.id)
            );
            //map
            const cartData = productsInCart.map(product => {
                const cartItem = cartItems.find(item => item.productId === product.id);
                const quantity = cartItem ? Number(cartItem.quantity) : 0;
                return { ...product, quantity };
            });

            if (cartData.length == 0) {
                let emptyCart = document.querySelector('#emptyCart')
                let productLabels = document.querySelector("#productLabels")
                let cartProductsWrapper = document.querySelector('#cartProductsWrapper')
                cartProductsWrapper.className = "cartProductsWrapperHidden"
                emptyCart.className = "emptyCart"
                productLabels.className = "productLabelsHidden"
            } else {
                calculateAmount(cartData)
                renderProduct(cartData);
            }
            updatedItemCount(cartData, productsInWishlist)
            if (productsInWishlist.length != 0) {
                renderWishlistData(productsInWishlist)
            } else {
                renderEmptyWishlist()
            }

        } else {
            console.log("No data available");
        }
    } catch (error) {
        console.error(error);
    }
}

fetchUserDataAndProducts();

async function removeProductFromCart(productId) {
    if (uid) {
        const userRef = ref(db, `users/${uid}`);
        get(userRef).then((snapshot) => {
            if (snapshot.exists()) {
                let userData = snapshot.val();
                if (userData.cartItems) {
                    userData.cartItems = userData.cartItems.filter(item => item.productId !== productId);
                    set(userRef, userData).then(() => {
                        fetchUserDataAndProducts();
                    }).catch((error) => {
                        console.error("Error updating user data:", error);
                    });
                } else {
                    console.log("No items in cart.");
                }
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}
async function addProductToWishlist(productId) {
    if (uid) {
        const userRef = ref(db, `users/${uid}`);
        return get(userRef).then((snapshot) => {
            if (snapshot.exists()) {
                let userData = snapshot.val();
                if (userData.wishlistItems) {
                    userData.wishlistItems.push(productId);
                } else {
                    userData.wishlistItems = [productId];
                }
                return set(userRef, userData);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}
async function removeProductFromWishlist(productId) {
    const uid = localStorage.getItem('uid');
    if (uid) {
        const userRef = ref(db, `users/${uid}`);
        get(userRef).then((snapshot) => {
            if (snapshot.exists()) {
                let userData = snapshot.val();
                if (userData.wishlistItems) {
                    userData.wishlistItems = userData.wishlistItems.filter(item => item !== productId);
                    set(userRef, userData).then(() => {
                        fetchUserDataAndProducts();
                        document.location.reload();
                    }).catch((error) => {
                        console.error("Error updating user data:", error);
                    });
                } else {
                    console.log("No items in wishlist.");
                }
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}
async function addProductToCart(productId) {
    if (uid) {
        const userRef = ref(db, `users/${uid}`);
        return get(userRef).then((snapshot) => {
            if (snapshot.exists()) {
                let userData = snapshot.val();
                if (userData.cartItems) {
                    userData.cartItems.push({ productId: productId, quantity: 1 });
                } else {
                    userData.cartItems = [{ productId: productId, quantity: 1 }];
                }
                return set(userRef, userData);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}

const cartProductWrapper = document.querySelector("#cartProductsWrapper");
function renderProduct(data) {
    cartProductWrapper.innerHTML = ''
    data.forEach((product) => {
        let productDiv = document.createElement('div');
        productDiv.className = 'singleCartProduct';

        let productImageAndDetailsDiv = document.createElement('div');
        productImageAndDetailsDiv.className = 'productImageAndDetails';

        let imageWrapperDiv = document.createElement('div');
        imageWrapperDiv.className = 'imageWrapper';

        let productImage = document.createElement('img');
        productImage.src = product.productImage[0];
        imageWrapperDiv.appendChild(productImage);

        let productDetailsAndControlsDiv = document.createElement('div');
        productDetailsAndControlsDiv.className = 'productDetailsAndControls';

        let nameAndStockDiv = document.createElement('div');
        nameAndStockDiv.className = 'nameAndStock';

        let productName = document.createElement('h3');
        productName.textContent = product.productName;
        nameAndStockDiv.appendChild(productName);

        let productStock = document.createElement('p');
        if (product.stock < 10) {
            productStock.textContent = 'Out of Stock';
        } else {
            productStock.textContent = 'In Stock';
        }

        nameAndStockDiv.appendChild(productStock);

        let buttonsWrapperDiv = document.createElement('div');
        buttonsWrapperDiv.className = 'buttonsWrapper';

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i> Remove';
        buttonsWrapperDiv.appendChild(deleteButton);
        deleteButton.addEventListener('click', () => {
            removeProductFromCart(product.id)
        })

        let saveButton = document.createElement('button');
        saveButton.innerHTML = '<i class="fa-solid fa-heart"></i> Save for later';
        buttonsWrapperDiv.appendChild(saveButton);
        saveButton.addEventListener('click', async () => {
            await addProductToWishlist(product.id);
            removeProductFromCart(product.id);
        });

        productDetailsAndControlsDiv.append(nameAndStockDiv, buttonsWrapperDiv);
        productImageAndDetailsDiv.append(imageWrapperDiv, productDetailsAndControlsDiv);

        let priceAndControlsDiv = document.createElement('div');
        priceAndControlsDiv.className = 'priceAndControls';

        let priceWrapperDiv = document.createElement('div');
        priceWrapperDiv.className = 'priceWrapper';

        let productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price * product.quantity}`
        priceWrapperDiv.append(productPrice);

        let quantityControlDiv = document.createElement('div');
        quantityControlDiv.className = 'quantityControl';

        let decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        quantityControlDiv.appendChild(decreaseButton);
        decreaseButton.addEventListener('click', () => {
            if (product.quantity > 1) {
                decrementQuantity(product.id)
            } else {
                decreaseButton.disabled = true
            }

        })
        let quantitySpan = document.createElement('span');
        quantitySpan.textContent = `${product.quantity}`;
        quantityControlDiv.appendChild(quantitySpan);

        let increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        quantityControlDiv.appendChild(increaseButton);
        increaseButton.addEventListener('click', () => {
            incrementQuantity(product.id)
        })
        priceAndControlsDiv.append(priceWrapperDiv, quantityControlDiv);

        productDiv.append(productImageAndDetailsDiv, priceAndControlsDiv);
        cartProductWrapper.append(productDiv);
    })
}
let emptyWishlist = document.querySelector("#emptyWishlist");

const wishListProductWrapper = document.querySelector("#wishListProductWrapper")
function renderWishlistData(data) {
    wishListProductWrapper.innerHTML = ""
    emptyWishlist.innerHTML = ""
    data.forEach((product) => {
        let wishlistProducts = document.createElement('div');
        wishlistProducts.className = 'wishlistProducts';

        let wishlistProducts_imageAndDetails = document.createElement('div');
        wishlistProducts_imageAndDetails.className = 'wishlistProducts_imageAndDetails';

        let wishlistImageWrapper = document.createElement('div');
        wishlistImageWrapper.className = 'wishlistImageWrapper';

        let img = document.createElement('img');
        img.src = product.productImage[0];
        img.alt = product.productName;

        let wishlistProductDetailsWrapper = document.createElement('div');
        wishlistProductDetailsWrapper.className = 'wishlistProductDetailsWrapper';

        let productName = document.createElement('p');
        productName.innerText = product.productName;

        let stock = document.createElement('p');
        if (product.stock < 10) {
            stock.textContent = 'Out of Stock';
        } else {
            stock.textContent = 'In Stock';
        }

        let price = document.createElement('p');
        price.innerHTML = `$${product.price}`

        let wishlistControls = document.createElement('div');
        wishlistControls.className = 'wishlistControls';

        let moveToCart = document.createElement('button');
        moveToCart.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>Move to cart';
        moveToCart.addEventListener('click', async () => {
            await addProductToCart(product.id);
            removeProductFromWishlist(product.id);
        });

        let removeItem = document.createElement('button');
        removeItem.innerHTML = '<i class="fa-solid fa-trash"></i>Remove';
        removeItem.addEventListener('click', () => {
            removeProductFromWishlist(product.id)
        })

        wishlistImageWrapper.append(img);
        wishlistProductDetailsWrapper.append(productName, stock, price);
        wishlistProducts_imageAndDetails.append(wishlistImageWrapper, wishlistProductDetailsWrapper);
        wishlistControls.append(moveToCart, removeItem);
        wishlistProducts.append(wishlistProducts_imageAndDetails, wishlistControls);
        wishListProductWrapper.append(wishlistProducts);
    })
}

function updatedItemCount(cartData, wishlistData) {
    const cartItemsCount = document.querySelector('#cartItemsCount');
    cartItemsCount.innerHTML = `(${cartData.length} Items)`
    const wishlistItemsCount = document.querySelector('#wishlistItemsCount')
    wishlistItemsCount.innerHTML = `(${wishlistData.length} Items)`
}

function renderEmptyWishlist() {
    emptyWishlist.innerHTML = ""
    let h3 = document.createElement("h3");
    h3.textContent = "Your wishlist is empty";
    let p = document.createElement("p");
    p.innerHTML = "seems like you don't have wishes here. <br /> Make a wish!";
    let continueShopping = document.createElement("button");
    continueShopping.textContent = "Continue Shopping";
    emptyWishlist.append(h3, p, continueShopping);
}




// Quantity control and Pricing management
async function incrementQuantity(productId) {
    if (uid) {
        const userRef = ref(db, `users/${uid}`);
        get(userRef).then((snapshot) => {
            if (snapshot.exists()) {
                let userData = snapshot.val();
                if (userData.cartItems) {
                    let product = userData.cartItems.find(item => item.productId === productId);
                    if (product) {
                        product.quantity += 1;
                    }
                    set(userRef, userData).then(() => {
                        fetchUserDataAndProducts()
                    }).catch((error) => {
                        console.error("Error updating user data:", error);
                    });
                } else {
                    console.log("No items in cart.");
                }
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}

async function decrementQuantity(productId) {
    if (uid) {
        const userRef = ref(db, `users/${uid}`);
        get(userRef).then((snapshot) => {
            if (snapshot.exists()) {
                let userData = snapshot.val();
                if (userData.cartItems) {
                    let product = userData.cartItems.find(item => item.productId === productId);
                    if (product && product.quantity > 1) {
                        product.quantity -= 1;
                    }
                    set(userRef, userData).then(() => {
                        fetchUserDataAndProducts()
                    }).catch((error) => {
                        console.error("Error updating user data:", error);
                    });
                } else {
                    console.log("No items in cart.");
                }
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}

function calculateAmount(data) {
    let sub = 0;
    data.forEach((product) => {
        sub += (product.price * product.quantity);
    })
    let cartSummerySubtotal = document.querySelector('#cartSummerySubtotal')
    subtotalAmount = sub
    cartSummerySubtotal.innerHTML = `$${subtotalAmount.toFixed(2)}`
    totalPriceElement.innerHTML = `$${subtotalAmount.toFixed(2)}`
}


// Coupon Management
function showCoupon() {
    let appliedCouponManagement = document.querySelector("#appliedCouponManagement")
    let div = document.createElement('div');
    div.id = 'showCoupon';

    let p = document.createElement('p');
    p.textContent = 'happy10';
    div.appendChild(p);

    let i = document.createElement('i');
    i.className = 'fa-solid fa-square-xmark';
    i.style.color = '#fff';
    i.addEventListener('click', () => {
        removeDiscount()
        appliedCouponManagement.innerHTML = ""
    })
    div.appendChild(i);

    appliedCouponManagement.append(div);
}

function showAlert(message) {
    let couponAlerts = document.querySelector("#couponAlerts")
    let alert = document.createElement('p')
    alert.id = "couponAlertText"
    alert.innerHTML = message
    couponAlerts.append(alert)

    setTimeout(function () {
        alert.remove();
    }, 3000);
}

// showAlert("Test")
// showCoupon()
// Get elements
const couponInput = document.querySelector('#coupon_input');
const applyButton = document.querySelector('#coupon_apply_button');

// Apply discount
applyButton.addEventListener('click', () => {
    if (couponInput.value.toUpperCase() === 'HAPPY10') {
        const discount = subtotalAmount * 0.1;
        discountedAmount = subtotalAmount - discount;

        totalPriceElement.textContent = `$${discountedAmount.toFixed(2)}`;
        discountedAmountElement.textContent = `$${discount.toFixed(2)}`;
        showCoupon();
        couponInput.value = '';
        couponInput.disabled = true
    } else {
        showAlert('Invalid coupon code. Please try again.')
    }
});

function removeDiscount() {
    discountedAmount = subtotalAmount;
    totalPriceElement.textContent = `$${discountedAmount.toFixed(2)}`;
    discountedAmountElement.textContent = `$0.00`;
    couponInput.disabled = false;
}


document.getElementById('bottomCheckoutButton').addEventListener('click', function () {
    let amount;
    if (discountedAmount == 0) {
        amount = subtotalAmount
    } else {
        amount = discountedAmount
    }

    localStorage.setItem('finalAmount', amount);
    window.location.href = 'checkout.html';
});
