document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const totalSlides = document.querySelectorAll(".card").length;
  let increaseProgress = true;


  showSlide(currentSlide, increaseProgress);

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


  function showSlide(slideIndex, increaseProgress) {
    const slides = document.querySelectorAll(".card");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    updatePageCounter(slideIndex, increaseProgress);
  }


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
    addToCart.addEventListener("click",()=>{
      addingToCart(pro);
    });

    card.append(cardImgDiv,cardContent);
return card;
}
function addingToCart(pro){
  let cartArray=JSON.parse(localStorage.getItem("product-id"))||[];
  cartArray.push(pro.id);
  localStorage.setItem("product-id",JSON.stringify(cartArray));
  console.log(cartArray);
  const countDisplay=document.querySelector(".cart-counter");
  countDisplay.textContent=cartArray.length;

  }

fetchProducts();


const searchBar=document.querySelector(".search");
const suggestion = document.querySelector(".suggestion-container");
searchBar.addEventListener("click",()=>{
  suggestion.classList.toggle("show");
  searchBar.classList.toggle("increase-width-search");
  console.log("Suggestion")
})
document.querySelector(".home-container").addEventListener("click",()=>{
  suggestion.classList.remove("show");

})
searchBar.addEventListener("input",throttle(
  function(){
    if(searchBar.value!==""){
      fetchSuggestions(searchBar.value);

    }
    else{
      suggestion.innerHTML=""
    }
},500));
   async function fetchSuggestions(query) {
try{
let results = await fetch(`https://new-plant-json-server.onrender.com/products?q=${query||""}`);
let data = await results.json();
if(data.length!==0){
  appendSuggestions(data);
}

}

catch(err){
console.log(err); 
const linkToProductPage=document.createElement("a");

linkToProductPage.classList.add("search-result");
linkToProductPage.textContent="No result";
suggestion.append(linkToProductPage);

}
   }  

function appendSuggestions(name){
  suggestion.innerHTML="";
  name.forEach(element => {
    
    const linkToProductPage=document.createElement("a");
    linkToProductPage.classList.add("search-result");
    linkToProductPage.textContent=element.productName;
    suggestion.append(linkToProductPage);
    console.log(`proDUCT-${element.productName}`);


  });
}
function throttle(fn,delay){
  let wait=false;
  return function(...args){
      if(!wait){
          fn();
          wait=true;
          setTimeout(()=>{
              wait=false;
          },delay)
      }
  }
}