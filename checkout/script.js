

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
let salePrice = 0

const uid = localStorage.getItem('uid');
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
            //map
            const cartData = productsInCart.map(product => {
                const cartItem = cartItems.find(item => item.productId === product.id);
                const quantity = cartItem ? Number(cartItem.quantity) : 0;
                return { ...product, quantity };
            });
            renderProducts(cartData)
        } else {
            console.log("No data available");
        }
    } catch (error) {
        console.error(error);
    }
}
fetchUserDataAndProducts()
let finalAmount = localStorage.getItem('finalAmount');
updatePrice(finalAmount)

let userInformation = localStorage.getItem('userInformation');

try {
    if (userInformation) {
        userInformation = JSON.parse(userInformation);

        document.getElementById('firstName').value = userInformation.firstName;
        document.getElementById('lastName').value = userInformation.lastName;
        document.getElementById('phone').value = userInformation.phone;
        document.getElementById('email').value = userInformation.email;
    }
} catch (error) {
    console.log('Error parsing user information:', error);
}

let productsList = document.querySelector("#productsList")
function renderProducts(data) {
    productsList.innerHTML = ""
    data.forEach((product) => {
        let singleProduct = document.createElement('div');
        singleProduct.className = 'singleProduct';

        let imageWrapper = document.createElement('div');
        imageWrapper.className = 'imageWrapper';
        let img = document.createElement('img');
        img.src = product.productImage[0]
        imageWrapper.appendChild(img);

        let proDetails = document.createElement('div');
        proDetails.className = 'proDetails';

        let nameAndPrice = document.createElement('div');
        nameAndPrice.className = 'nameAndPrice';
        let name = document.createElement('p');
        name.textContent = product.productName;
        let price = document.createElement('p');
        price.textContent = `$${product.price}`;
        nameAndPrice.append(name, price);

        let proQuantity = document.createElement('div');
        proQuantity.className = 'proQuantity';
        let quantity = document.createElement('p');
        quantity.textContent = `Qty: ${product.quantity}`;
        proQuantity.appendChild(quantity);

        proDetails.append(nameAndPrice, proQuantity);
        singleProduct.append(imageWrapper, proDetails);

        productsList.append(singleProduct)
    })
}

try {
    document.getElementById('phone').addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
} catch (error) {
    console.log();
}


try {
    let userDetailsForm = document.getElementById('userForm');

    userDetailsForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;

        let userInformation = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email
        };
        localStorage.setItem('userInformation', JSON.stringify(userInformation));
        console.log(userInformation);
        window.location.href = 'delivery.html';

    });
} catch (error) {
    console.log(error);
}

try {
    let deliveryDetailsForm = document.getElementById('deliveryForm');

    deliveryDetailsForm.addEventListener('submit', function (e) {
        e.preventDefault()
        let addressLine1 = document.getElementById('addressLine1').value;
        let addressLine2 = document.getElementById('addressLine2').value;
        let city = document.getElementById('city').value;
        let state = document.getElementById('state').value;

        let deliveryInformation = {
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            city: city,
            state: state
        };

        localStorage.setItem('deliveryInformation', JSON.stringify(deliveryInformation));

        console.log(deliveryInformation);

        window.location.href = 'payment-method.html';
    });
} catch (error) {
    console.log(error);
}


function updatePrice(finalAmount) {
    finalAmount = Number(finalAmount);
    let price = finalAmount * 0.18;

    document.querySelector('.delivery span:nth-child(2)').textContent = `$10`
    document.querySelector('.sale span:nth-child(2)').textContent = '$' + price.toFixed(2);

    let finalPrice = finalAmount + 10 + price;
    document.querySelector('#totalAmount').textContent = `$${finalPrice.toFixed(2)}`;
    salePrice = finalPrice
}




// Razerpay


var orderDetails = {
    "key": "rzp_live_808eBAPLXLQSvX",
    "amount": salePrice * 100,
    "currency": "USD",
    "name": "Green Paradise",
    "description": "Test Transaction",
    "image": "https://nurserylive.com/cdn/shop/products/nurserylive-g-plant-money-plant-scindapsus-green-plant-in-4.5-inch-11-cm-ronda-no-1110-round-plastic-turquoise-plant-548401_512x512.jpg?v=1679750636",
    "handler": function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": userInformation.firstName + ' ' + userInformation.lastName,
        "email": userInformation.email,
        "contact": userInformation.phone
    },
    "theme": {
        "color": "#486e00"
    }
};
var payment = new Razorpay(orderDetails);
document.getElementById("checkoutButton").onclick = function (e) {
    let paymentMethod = document.getElementById('paymentMethod').value;

    if (paymentMethod === 'Cash on Delivery') {
        window.location.href = 'success.html';
    } else if (paymentMethod === 'Credit/Debit Card') {
        payment.open();
        e.preventDefault();
    }
};
