import { navbarBigscreen, navbarSmallscreen } from "./navbar.js";
// -----------for footer------------>>
import footer from "../Product_Page/components/footer/footer.js";
document.getElementById("footer").innerHTML = footer();

let payable = JSON.parse(localStorage.getItem("totalAmount")) || 0;
let products = JSON.parse(localStorage.getItem("cart")) || [];

//payable ammount initilization
if (products.length > 0) {
  let totalAmount = 0;
  products.forEach((product) => {
    totalAmount += Number(product.price) * Number(product.qty);
  });
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount + 253 + 250));
}

document.getElementById("kkpaybtn").addEventListener("click", function (e) {
  payable = JSON.parse(localStorage.getItem("totalAmount")) || 0;

  var options = {
    key: "rzp_test_PuIvwrP2D7FLip",
    amount: payable * 100, // Amount in paise (100 paise = 1 INR)
    currency: "INR",
    name: "Green Paradise",
    description: "Payment for your order",
    image: "../images/logo.png",
    handler: function (response) {
      document.getElementById("quantity_bigscreen").textContent = 0;
      document.getElementById("quantity_smallscreen").textContent = 0;
      products = [];
      localStorage.setItem("cart", JSON.stringify(products));
      window.location.href = "/thankyou.html";
    },

    prefill: {
      name: "",
      email: "john@example.com",
      contact: "9876543210",
    },
    theme: {
      color: "green",
    },
  };

  var rzp = new Razorpay(options);

  rzp.open();
  e.preventDefault();
});

//quantitiy upadate on cart
let qty = document.getElementById("quantity_bigscreen");
let qty2 = document.getElementById("quantity_smallscreen");
let netqty = 0;
products.forEach((ele) => {
  netqty = netqty + Number(ele.qty);
  qty.textContent = netqty;
  qty2.textContent = netqty;
});

document.getElementById("kkcont").addEventListener("click", () => {
  let menu = document.getElementById("kkdelivery");
  // let display = window.getComputedStyle(menu).display;
  menu.style.display = "block";

  let menu2 = document.getElementById("kkpersonalInfoCont");
  menu2.style.display = "none";
});

document.getElementById("kkbackbtn").addEventListener("click", () => {
  let menu = document.getElementById("kkdelivery");
  // let display = window.getComputedStyle(menu).display;
  menu.style.display = "";

  let menu2 = document.getElementById("kkpersonalInfoCont");
  menu2.style.display = "block";
});

let productContainer = document.getElementById("kkrightcontent");
let itemImg = document.getElementById("itemImg");
let details = document.getElementById("itemDetails");
let totalAmt = document.getElementById("totalAmt");
let totalAmount = 0;

function updateTotalAmount() {
  payable =
    totalAmount + Number(sale.textContent) + Number(delivery.textContent);
  totalAmt.textContent = "Rs. " + payable;

  // console.log(payable);
  localStorage.setItem("totalAmount", JSON.stringify(payable));
}

// if card is empty
if (products.length > 0) {
  displayData(products);
} else {
  emptyCard();
}

function emptyCard() {
  document.querySelector("#kkcontainer").innerHTML = "";
  // document.querySelector(".itemPricing").innerHTML = "";

  let mainDiv = document.createElement("div");
  mainDiv.className = "mainEmptyDiv";

  let imgDiv = document.createElement("div");
  imgDiv.className = "imgEmptyDiv";
  let img = document.createElement("img");
  img.src = "/Images/cart_checkout/emptyCart.png";

  let h3 = document.createElement("h3");
  h3.textContent = "Your cart is Empty";

  let linkDiv = document.createElement("div");
  linkDiv.className = "link_catalog";
  let link = document.createElement("a");
  link.innerText = "Go to Catalog";
  link.setAttribute("href", "/Product_Page/index.html");

  linkDiv.append(link);
  imgDiv.append(img);
  mainDiv.append(imgDiv, h3, linkDiv);
  document.querySelector("#kkcontainer").append(mainDiv);
}

function displayData(products) {
  products.forEach((product, idx) => {
    let container = document.createElement("div");
    let imgdiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = product.img;
    imgdiv.append(img);

    let detailsdiv = document.createElement("div");
    detailsdiv.className = "detailsDiv";
    let divName = document.createElement("h5");
    divName.className = "itemName";
    divName.textContent = product.name;

    let divPrice = document.createElement("p");
    divPrice.className = "itemPrice";
    divPrice.textContent = "Price : " + product.price;
    totalAmount += Number(product.price) * Number(product.qty);

    let quantityBox = document.createElement("div");
    quantityBox.id = "quantityBox";

    let minus = document.createElement("div");
    minus.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    minus.setAttribute("class", "minus");
    minus.onclick = () => {
      if (count === 1) {
        minus.disabled = true; 
        return;
      } else {  
         minus.disabled = false; 
        netqty = netqty - 1;
        document.getElementById("quantity_bigscreen").textContent = netqty;
        document.getElementById("quantity_smallscreen").textContent = netqty;
        //
        product.qty = Number(product.qty) - 1;
        localStorage.setItem("cart", JSON.stringify(products));
        count--;
        qty.textContent = count;
        totalAmount -= Number(product.price);
        updateTotalAmount();
      }
    };

    let qty = document.createElement("div");
    qty.className = "itemQuantity";
    qty.textContent = Number(product.qty);

    let count = Number(qty.textContent);

    let plus = document.createElement("div");
    plus.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    plus.setAttribute("class", "plus");
    plus.onclick = () => {
      //
      netqty = netqty + 1;
      document.getElementById("quantity_bigscreen").textContent = netqty;
      document.getElementById("quantity_smallscreen").textContent = netqty;
      //
      count++;
      qty.textContent = count;
      product.qty = Number(product.qty) + 1;
      localStorage.setItem("cart", JSON.stringify(products));
      totalAmount += Number(product.price);
      updateTotalAmount();
    };

    let deleteItem = document.createElement("div");
    deleteItem.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteItem.setAttribute("class", "delete");
    deleteItem.onclick = () => {
      totalAmount -= Number(product.price) * Number(product.qty);
      updateTotalAmount();
      //
      netqty = netqty - Number(product.qty);
      console.log(qty, product.qty);
      document.getElementById("quantity_bigscreen").textContent = netqty;
      document.getElementById("quantity_smallscreen").textContent = netqty;
      // qty.textContent = netqty;
      // //
      products = products.filter((el) => el.img !== product.img);
      localStorage.setItem("cart", JSON.stringify(products));
      container.remove();
      if (products.length <= 0) {
        emptyCard();
      }
    };

    quantityBox.append(minus, qty, plus, deleteItem);

    detailsdiv.append(divName, divPrice, quantityBox);

    container.append(imgdiv, detailsdiv);
    details.append(container);
  });
}

let sale = document.getElementById("salesPrice");
let delivery = document.getElementById("deliveryCharge");
totalAmt.textContent =
  "Rs. " +
  (totalAmount + Number(sale.textContent) + Number(delivery.textContent));

// Validation
var inputFields = document.querySelectorAll(".kkinputfields input");
var continueButton = document.getElementById("kkcont");

// Function to check if any input field is empty
function checkInputs() {
  let isEmailValid = true;
  for (var i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value === "") {
      continueButton.disabled = true; // Disable the "Continue" button
      return;
    }
  }
  const emailInput = document.getElementById("email"); // Assuming the email input has the id "email"
  if (
    !emailInput.value.includes("@") ||
    !emailInput.value.includes("gmail") ||
    !emailInput.value.includes(".com")
  ) {
    isEmailValid = false;
  }
  continueButton.disabled = !isEmailValid; // Enable the "Continue" button
}

for (var i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("input", checkInputs);
}
checkInputs();

var countryInput = document.getElementById("country");
var stateInput = document.getElementById("indian-states");
var cityInput = document.getElementById("city");
var pinInput = document.getElementById("pin");
var payButton = document.getElementById("kkpaybtn");

function checkInputsForDelivery() {
  const countryValue = countryInput.value;
  const stateValue = stateInput.value;
  const cityValue = cityInput.value;
  const pinValue = pinInput.value;

  const isPinValid = /^[0-9]{6}$/.test(pinValue); // Check if pin is 6 digits

  // Check if any input field is empty or the pin is not valid
  if (
    countryValue === "" ||
    stateValue === "" ||
    cityValue === "" ||
    pinValue === "" ||
    !isPinValid
  ) {
    payButton.disabled = true; // Disable the "Proceed to Pay" button
  } else {
    payButton.disabled = false; // Enable the "Proceed to Pay" button
  }
}

// Add event listeners to the input fields
countryInput.addEventListener("input", checkInputsForDelivery);
stateInput.addEventListener("input", checkInputsForDelivery);
cityInput.addEventListener("input", checkInputsForDelivery);
pinInput.addEventListener("input", checkInputsForDelivery);

// Initial check on page load
checkInputsForDelivery();
