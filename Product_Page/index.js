import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
import { getDatabase, ref, set, get } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js';

const firebaseConfig = {
  apiKey: "AIzaSyAiwRTYbPsBZukrBa_PCJrz9yVly6bAAVQ",
  authDomain: "plant-site-aac81.firebaseapp.com",
  databaseURL: "https://plant-site-aac81-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "plant-site-aac81",
  storageBucket: "plant-site-aac81.appspot.com",
  messagingSenderId: "1029613642800",
  appId: "1:1029613642800:web:4b431fb4e9adb5ce2439f5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
localStorage.setItem('uid', "JIGe8tH5ceb6P5eXHNnRjE9vwKm2")

//////////////////////////   DON'T DO ANYTHING FOR THE ABOVE CODE /////////////////////////






// Function to fetch and display products for the "sec_img" section
async function fetchProductsForSecImg() {
  try {
    const response = await fetch('https://new-plant-json-server.onrender.com/products');
    const products = await response.json();

    // Get the sorting dropdown element
    const selectElementForSecImg = document.getElementById('sorting');
    const selectedOption = selectElementForSecImg.value;


    // Sort the products based on the selected option
    products.sort((a, b) => {
      if (selectedOption === 'atoz') {
        return a.productName.localeCompare(b.productName);
      } else if (selectedOption === 'ztoa') {
        return b.productName.localeCompare(a.productName);
      } else if (selectedOption === 'lowtohigh') {
        return a.price - b.price;
      } else if (selectedOption === 'hightolow') {
        return b.price - a.price;
      } else {
        return 0; // No sorting
      }
    });

    displayProductsForSecImg(products);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Function to display products for the "sec_img" section
function displayProductsForSecImg(products) {
  const productCatalog = document.querySelector('.sec_img .product_catalog');

  // Clear existing product cards
  while (productCatalog.firstChild) {
    productCatalog.removeChild(productCatalog.firstChild);
  }

  products.forEach(product => {
    const productCard = createProductCard(product);
    productCatalog.appendChild(productCard);
  });
}

// Function to create a product card
function createProductCard(product) {
  const productCard = document.createElement('div');
  productCard.classList.add('product_card');

  // Create the product image container
  const productCardContainer = document.createElement('div');
  productCardContainer.classList.add('productcard_container');

  // Create the favorite icon
  const favoriteIcon = document.createElement('div');
  favoriteIcon.classList.add('fav_icon');
  favoriteIcon.setAttribute('data-tooltip', 'add to wishlist');
  favoriteIcon.innerHTML = '<span class="material-symbols-outlined">favorite</span>';
  productCardContainer.appendChild(favoriteIcon);

  // Create the product image
  const productImage = document.createElement('div');
  productImage.classList.add('pimg');
  const img = document.createElement('img');
  img.src = product.productImage[0]; // Use the first image URL
  img.alt = product.productName;
  productImage.appendChild(img);
  productCardContainer.appendChild(productImage);

  productCard.appendChild(productCardContainer);

  // Create the product description
  const productDescription = document.createElement('p');
  productDescription.classList.add('product_des');
  productDescription.innerHTML = `${product.productName}<br>$${product.price}`;
  productCard.appendChild(productDescription);

  const addCartButton = document.createElement('button');
  addCartButton.classList.add('addcart');
  addCartButton.addEventListener("click", () => {
    updateUserData(product.id, "cartItems")
    alert("Item added to cart")
  })

  // Create an image element for the button
  const cartImage = document.createElement('img');
  cartImage.src = 'images/cart_img.png'; // Replace with the actual image URL
  cartImage.alt = 'Add to Cart';

  addCartButton.appendChild(cartImage);
  productCard.appendChild(addCartButton);

  return productCard;
}


// productCard.addEventListener('click', () => {
//   // Store the selected product in localStorage
//   localStorage.setItem('selectedProduct', JSON.stringify(product));

//   // Navigate to the product details page
//   window.location.href = 'Product_Detail_Page.html';
// });

// Call the fetchProductsForSecImg function to load products for the "sec_img" section
fetchProductsForSecImg();

// Listen for changes to the sorting dropdown
const selectElementForSecImg = document.getElementById('sorting');
selectElementForSecImg.addEventListener('change', fetchProductsForSecImg);





const productSlider = document.querySelector(".product-slider");

async function fetchProducts() {
  try {
    const response = await fetch('https://new-plant-json-server.onrender.com/products');
    const products = await response.json();

    displayProducts(products);
  } catch (error) {
    console.error('Error:', error);
  }
}
let index = 0;




function displayProducts(products) {

  const nextBtn = document.getElementById("nextPro");
  nextBtn.addEventListener("click", () => {
    if (index < 3) {
      index = index + 3;
      console.log(index);
      productSlider.innerHTML = "";
      displayProducts(products, index);
    }
  });
  const prevBtn = document.getElementById("prevPro");
  prevBtn.addEventListener("click", () => {
    if (index > 2) {
      index = index - 3;
      console.log(index);
      productSlider.innerHTML = "";
      displayProducts(products, index);
    }
  });
  for (let i = index; i < index + 3; i++) {
    let card = createCard(products[i]);
    productSlider.append(card);
  }
}
function createCard(pro) {
  const card = document.createElement("div");
  const cardImgDiv = document.createElement("div");
  const cardImg = document.createElement("img");
  cardImg.src = pro.productImage[0];
  const cardContent = document.createElement("div");
  const cardNameNPrice = document.createElement("div");
  const cardName = document.createElement("p");
  const cardPrice = document.createElement("p");
  const addToCart = document.createElement("button");
  const addToCartImage = document.createElement("img");
  addToCartImage.src = "../images/shopping-cart.png";
  addToCart.append(addToCartImage);
  cardName.textContent = pro.productName;
  cardPrice.textContent = `${pro.price} UAH`;
  cardNameNPrice.append(cardName, cardPrice);

  cardContent.append(cardNameNPrice, addToCart);
  cardImgDiv.append(cardImg);
  cardContent.classList.add("Productcard-content");
  card.classList.add("Productcard");
  cardImgDiv.classList.add("Productcard-img-div");
  cardNameNPrice.classList.add("Productcard-name-price");
  addToCart.classList.add("addcart");
  addToCart.addEventListener("click", () => {
    addingToCart(pro);
  });



  addToCart.addEventListener("click", () => {
    updateUserData(pro.id, 'cartItems');
  });

  card.append(cardImgDiv, cardContent);
  return card;

}



fetchProducts();


function appendSuggestions(name) {
  suggestion.innerHTML = "";
  name.forEach(element => {

    const linkToProductPage = document.createElement("a");
    linkToProductPage.classList.add("search-result");
    linkToProductPage.textContent = element.productName;
    suggestion.append(linkToProductPage);
    console.log(`proDUCT-${element.productName}`);


  });
}
function throttle(fn, delay) {
  let wait = false;
  return function (...args) {
    if (!wait) {
      fn();
      wait = true;
      setTimeout(() => {
        wait = false;
      }, delay)
    }
  }
}


async function updateUserData(productId, arrayName) {
  const uid = localStorage.getItem('uid');
  if (uid) {
    const userRef = ref(db, `users/${uid}`);
    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        let userData = snapshot.val();
        if (userData[arrayName]) {
          if (arrayName === 'cartItems') {
            userData[arrayName].push({ productId: productId, quantity: 1 });
          } else {
            userData[arrayName].push(productId);
          }
        } else {
          userData[arrayName] = arrayName === 'cartItems' ? [{ productId: productId, quantity: 1 }] : [productId];
        }
        set(userRef, userData).then(() => {
          console.log("User data updated successfully.");
        }).catch((error) => {
          console.error("Error updating user data:", error);
        });
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
}
