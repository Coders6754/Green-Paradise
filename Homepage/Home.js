document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const totalSlides = document.querySelectorAll(".card").length;
  let increaseProgress = true;

  // Initial display
  showSlide(currentSlide, increaseProgress);
  // Event listeners for next and previous buttons
  const nextBtn=document.getElementById("nextBtn");
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
  circularProgress.style.background = `conic-gradient(#486e00 ${
    progressStartValue * 3.6
  }deg, #ededed 0deg)`;
}
///////////////////////////////////////////////////////////////////////////////////////////
const productSlider=document.querySelector(".product-slider");

async function fetchProducts() {
    try {
        const response = await fetch('https://new-plant-json-server.onrender.com/products');
        const products = await response.json();
      console.log(products);
      
        displayProducts(products);
    } catch (error) {
        console.error('Error:', error);
    }
}
let index=0;



function displayProducts(products) {
    // products.forEach((product) => {
    // let card=createCard(product);
    // productSlider.append(card);
    // })
    const nextBtn=document.getElementById("nextPro");
    nextBtn.addEventListener("click", () => {
        if(index<3) 
        {index=index+3;
        console.log(index);
        productSlider.innerHTML="";
    displayProducts(products,index);}
    });
    const prevBtn=document.getElementById("prevPro");
    prevBtn.addEventListener("click", () => {
        if(index>2) 
        {index=index-3;
        console.log(index);
        productSlider.innerHTML="";
    displayProducts(products,index);}
    });
    for(let i=index; i<index+3;i++){
        let card=createCard(products[i]);
    productSlider.append(card);
    }
}
function createCard(pro){
    const card=document.createElement("div");
    const cardImgDiv=document.createElement("div");
    const cardImg=document.createElement("img");
    cardImg.src=pro.productImage[0];
    const cardContent=document.createElement("div");
    const cardNameNPrice=document.createElement("div");
    const cardName=document.createElement("p");
    const cardPrice=document.createElement("p");
    const addToCart=document.createElement("button");
    const addToCartImage=document.createElement("img");
    addToCartImage.src="../images/shopping-cart.png";
    addToCart.append(addToCartImage);
    cardName.textContent=pro.productName;
    cardPrice.textContent=`${pro.price} UAH`;
    cardNameNPrice.append(cardName,cardPrice);
    
    cardContent.append(cardNameNPrice,addToCart);
    cardImgDiv.append(cardImg);
    cardContent.classList.add("Productcard-content");
    card.classList.add("Productcard");
    cardImgDiv.classList.add("Productcard-img-div");
    cardNameNPrice.classList.add("Productcard-name-price");
    addToCart.classList.add("add-cart-button");
    card.append(cardImgDiv,cardContent);
return card;
}
// function createCategoryCard() {
//    let cat0="Houseplants";
//    let cat1="Houseplants sets";
//    let cat2="Flowerpot";
//    let cat3="Soil and fertilizer";
//    const categoryList =document.querySelector("categories-list")

//    for(let i = 0; i <4;i++) { 
//     const catcard=document.createElement("div");
//     const catcardImgDiv=document.createElement("div");
//     const catcardImg=document.createElement("img");
//     catcardImg.src=`./HomeImages/catImg${i}.jpg`
//     const catcardContent=document.createElement("div");
//     catcardContent.textContent=`cat${i}`;
//     catcardImgDiv.append(catcardImg);
//     catcard.append(catcardImgDiv,catcardContent);
//     catcardImgDiv.classList.add("cat-img-div");
//     catcardContent.classList.add("cat-content");
//     catcard.classList.add("cat-card");
//     categoryList.append(catcard);

//  }
// console.log("heyyy")
// }
// createCategoryCard()
fetchProducts();
