// All necessary codes for Firebase
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

const uid = localStorage.getItem('uid');

//  <------------- Don't moidfy the above code ------------->

const loginBtn = document.querySelector('.login-btn');
if (localStorage.getItem('uid')) {

  async function fetchUserDataAndProducts() {
    try {
      const userRef = ref(db, 'users/' + uid);

      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        loginBtn.textContent = `${userData.firstName}`;
        loginBtn.Disabled = true;
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error(error);
    }
  }
  fetchUserDataAndProducts()

}
loginBtn.addEventListener('click', () => {
  window.location.href = "../test.html";

})



document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const totalSlides = document.querySelectorAll(".card").length;
  let increaseProgress = true;

  // Initial display
  showSlide(currentSlide, increaseProgress);
  // Event listeners for next and previous buttons
  const nextBtn = document.getElementById("nextBtn");
  nextBtn.addEventListener("click", () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      increaseProgress = true;

      showSlide(currentSlide, increaseProgress);
    }

  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      increaseProgress = false;

      showSlide(currentSlide, increaseProgress);
    }
  });

  // Function to show the current slide
  function showSlide(slideIndex, increaseProgress) {
    const slides = document.querySelectorAll(".card");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    updatePageCounter(slideIndex, increaseProgress);
  }

  // Function to update the page counter
  function updatePageCounter(slideIndex, increaseProgress) {
    const pageCounter = document.getElementById("pageCounter");
    pageCounter.textContent = `${slideIndex + 1} / ${totalSlides}`;
    console.log(slideIndex + 1);
    if (slideIndex + 1 <= totalSlides) {
      updateProgress(increaseProgress);
    }
  }
});
let circularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value");
let progressStartValue = 0,
  progressEndValue = 100,
  speed = 100;
function updateProgress(increaseProgress) {
  if (increaseProgress) {
    progressStartValue = progressStartValue + 25;
  } else {
    progressStartValue = progressStartValue - 25;
  }
  progressValue.textContent = `${progressStartValue}%`;
  circularProgress.style.background = `conic-gradient(#486e00 ${progressStartValue * 3.6
    }deg, #ededed 0deg)`;
}
///////////////////////////////////////////////////////////////////////////////////////////
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
  // products.forEach((product) => {
  // let card=createCard(product);
  // productSlider.append(card);
  // })
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
  addToCart.classList.add("add-cart-button");
  const cardCounter = document.querySelector(".cart-counter");

  let prev = JSON.parse(localStorage.getItem("cartItems")) || 0;
  cardCounter.textContent = prev;

  addToCart.addEventListener("click", () => {
    // if(localStorage.getItem(uid)){
    //   addProductcard()
    // }
    let prev = JSON.parse(localStorage.getItem("cartItems")) || 0;
    prev = prev + 1;
    updateUserData(pro.id, 'cartItems');
    const cardCounter = document.querySelector(".cart-counter");
    cardCounter.textContent = prev;
    localStorage.setItem('cartItems', JSON.stringify(prev));
  });

  card.append(cardImgDiv, cardContent);
  return card;
}

// Function for adding data to the card.
async function updateUserData(productId, arrayName) {
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


fetchProducts();


//////////////////////////////////SEARCH////////////////////////////////////////////////////
const searchBar = document.querySelector(".search");
const suggestion = document.querySelector(".suggestion-container");
searchBar.addEventListener("click", () => {
  suggestion.classList.toggle("show");
  searchBar.classList.toggle("increase-width-search");
  console.log("Suggestion")
})
document.querySelector(".home-container").addEventListener("click", () => {
  suggestion.classList.remove("show");

})
searchBar.addEventListener("input", throttle(
  function () {
    if (searchBar.value !== "") {
      fetchSuggestions(searchBar.value);

    }
    else {
      suggestion.innerHTML = ""
    }
  }, 500));
async function fetchSuggestions(query) {
  try {
    let results = await fetch(`https://new-plant-json-server.onrender.com/products?q=${query || ""}`);
    let data = await results.json();
    if (data.length !== 0) {
      appendSuggestions(data);
    }

  }

  catch (err) {
    console.log(err);
    const linkToProductPage = document.createElement("a");

    linkToProductPage.classList.add("search-result");
    linkToProductPage.textContent = "No result";
    suggestion.append(linkToProductPage);

  }
}

function appendSuggestions(name) {
  suggestion.innerHTML = "";
  name.forEach(element => {

    const linkToProductPage = document.createElement("a");
    linkToProductPage.classList.add("search-result");
    linkToProductPage.textContent = element.productName;
    linkToProductPage.addEventListener("click", () => {
      // window.location.href ="./Product_Page/Product_Detail_Page.html"   //replace with specific product page link
      localStorage.setItem('productSearched', element.productName)
    })
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
////////////////////////////////NAV/////Links///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



