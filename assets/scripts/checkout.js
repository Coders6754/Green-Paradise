import footer from "../components/footer.js";
import nav from "../components/nav.js";

document.querySelector("footer").innerHTML = footer();
document.querySelector("nav").innerHTML = nav();

let userAdd = JSON.parse(localStorage.getItem("userAdd")) || [];
let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];
let cartList = JSON.parse(localStorage.getItem("cart-list")) || [];
let cartCount = JSON.parse(localStorage.getItem("cart-count")) || 0;

let options = {
  key: "rzp_test_M654vKdrqhRFgq",
  amount: (100+ +localStorage.getItem("total-amount")) * 100,
  name: userInfo.firstName,
  currency: "INR",
  description: "Acme Corp",
  // add here rozarpay image
  image: "#",
  prefill: {
    
  },
  handler: function (response) {
    localStorage.removeItem("cart-list");
    localStorage.removeItem("cart-count");
    window.location.href = "thankyou.html";
  },
};
let rzp1 = new Razorpay(options);

document.addEventListener("DOMContentLoaded", function () {
  updatePaymentAmount();

  document.getElementById("pay").addEventListener("click", function (e) {
    updatePaymentDetails();
    rzp1.open();
    e.preventDefault();
  });
});

let displayCart = () => {
  let parent = document.getElementById("cart-items");
  parent.innerHTML = "";
  var data = JSON.parse(localStorage.getItem("cart-list")) || [];
  data.forEach((el) => {
    let card = document.createElement("div");
    card.className = "cards";
    card.innerHTML = `<div class="cards">
        <div class="row g-0">
          <div class="col-3">
            <img
              src=${el.img}
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-8 ps-2">
            <h5>${el.name}</h5>
            <p>${el.price}RS</p>
          </div>
          <div class="col-1 ps-2">
          <i class="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>`;
    parent.append(card);
  });

  let trashIcons = document.querySelectorAll(".fa-trash");
  trashIcons.forEach((trashIcon) => {
    trashIcon.addEventListener("click", handleTrashClick);
  });
};

function updateCartCount() {
  var cartCountElement = document.getElementById("cartCount");
  var cartData = JSON.parse(localStorage.getItem("cart-list")) || [];
  cartCountElement.textContent = cartData.length;
}

function updateRazorpayAmount() {
  let totalAmount = JSON.parse(localStorage.getItem("total-amount")) || 0;
  options.amount = (totalAmount + 100) * 100;
}

function updatePaymentAmount() {
  var data = JSON.parse(localStorage.getItem("cart-list")) || [];
  console.log(data);
  var totalAmount = 0;

  data.forEach(function (product) {
    totalAmount += product.price;
  });

  totalAmount += 100;

  let itemsTotal = document.getElementById("itemsTotal");
  localStorage.setItem("total-amount", JSON.stringify(totalAmount));

  if (data.length === 0) {
    document.getElementById("total").style.display = "none";
  } else { 
    document.getElementById("total").style.display = "block";
  }

  itemsTotal.textContent = totalAmount.toFixed(2) + "RS";
  var paymentAmountElement = document.getElementById("paymentAmount");
  paymentAmountElement.textContent = 100+ +totalAmount.toFixed(2) + "RS";
  updateRazorpayAmount();
  updateCartCount();
}

function createRazorpayInstance() {
  return new Razorpay(options);
  options.amount = (totalAmount+100) * 100;
}

function updatePaymentDetails() {
  var userData = JSON.parse(localStorage.getItem("userData")) || {};
  var data = JSON.parse(localStorage.getItem("cart-list")) || [];
  var totalAmount = 0;

  data.forEach(function (product) {
    totalAmount += product.price;
  });

  options.prefill.email = userData.email;
  options.prefill.contact = userData.mobile;
  options.amount = totalAmount;
  updateCartCount();
}

function handleTrashClick(event) {
  let indexToRemove = parseInt(event.target.getAttribute("data-index"));
  let cartList = JSON.parse(localStorage.getItem("cart-list")) || [];

  cartList.splice(indexToRemove, 1);
  let totalAmount = cartList.reduce(
    (total, product) => total + product.price,
    0
  );

  localStorage.setItem("cart-list", JSON.stringify(cartList));
  localStorage.setItem("total-amount", JSON.stringify(totalAmount));

  if (cartList.length === 0) {
    localStorage.removeItem("cart-count");
  } else {
    localStorage.setItem("cart-count", JSON.stringify(cartList.length));
  }

  updatePaymentAmount();
  updateRazorpayAmount();
  displayCart();

  rzp1 = createRazorpayInstance(options.amount);
}

console.log(userAdd, userInfo);

document.addEventListener("DOMContentLoaded", () => {
  let loggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  if (!loggedIn) {
    window.location.href = "login.html";
  }

  window.addEventListener("storage", (event) => {
    if (event.key === "cart-list" || event.key === "cart-count") {
      cartList = JSON.parse(localStorage.getItem("cart-list")) || [];
      cartCount = cartList.length;
      updateCartCountUI();
      updateProfileButtonState();
    }
  });

  document.addEventListener("addToCart", () => {
    displayCart();
    updateCartCountUI();
    updatePaymentAmount();
    updateProfileButtonState();
    updateRazorpayAmount();
    rzp1.update(options);
  });

  const personalInfoSection = document.getElementById("personalInfoSection");
  const deliverySection = document.getElementById("deliverySection");
  const paymentSection = document.getElementById("paymentSection");

  const personalInfoContinueButton = document.getElementById(
    "personalInfoContinue"
  );
  const deliveryBackButton = document.getElementById("deliveryBack");
  const deliveryContinueButton = document.getElementById("add-submit");
  const paymentBackButton = document.getElementById("paymentBack");

  function updateProfileButtonState() {
    if (cartCount === 0) {
      personalInfoContinueButton.disabled = true;
      console.log(personalInfoContinueButton, cartCount);
    } else {
      personalInfoContinueButton.disabled = false;
      console.log(personalInfoContinueButton, cartCount);
    }
  }

  updateProfileButtonState();

  personalInfoContinueButton.addEventListener("click", (event) => {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    if (!firstName || !lastName || !email || !mobile) {
      displayValidationModal("Please fill in all details.");
    } else {
      var userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobile: mobile,
      };

      localStorage.setItem("userInfo", JSON.stringify(userData));
      personalInfoSection.style.display = "none";
      deliverySection.style.display = "block";
    }
  });

  deliveryBackButton.addEventListener("click", () => {
    deliverySection.style.display = "none";
    personalInfoSection.style.display = "block";
  });

  deliveryContinueButton.addEventListener("click", (event) => {
    event.preventDefault();

    let address = document.getElementById("address").value;
    let landmark = document.getElementById("landmark").value;
    let city = document.getElementById("city").value;
    let pincode = document.getElementById("pincode").value;

    if (!address || !landmark || !city || !pincode) {
      displayValidationModal("Please fill in all details.");
      return;
    } else {
      localStorage.setItem(
        "userAdd",
        JSON.stringify({ address, landmark, city, pincode })
      );
      deliverySection.style.display = "none";
    }

    if (pincode.length !== 6 || isNaN(pincode)) {
      displayValidationModal("Pincode must be a 6-digit number.");
      return;
    }

    paymentSection.style.display = "block";
    updateUserInfoDisplay();
  });

  paymentBackButton.addEventListener("click", () => {
    event.preventDefault();
    paymentSection.style.display = "none";
    deliverySection.style.display = "block";
  });

  function updateCartCountUI() {
    let cCount = document.getElementById("cartCount");
    cCount.innerText = cartCount;
  }

  function displayValidationModal(message) {
    const validationModal = new bootstrap.Modal(
      document.getElementById("validationModal")
    );
    const validationMessage = document.getElementById("validationMessage");
    validationMessage.textContent = message;
    validationModal.show();

    const closeButton = document.getElementById("validationCloseButton");
    closeButton.addEventListener("click", () => {
      validationModal.hide();
    });

    setTimeout(() => {
      validationModal.hide();
    }, 3000);
  }

  function updateUserInfoDisplay() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const userAdd = JSON.parse(localStorage.getItem("userAdd"));

    if (userInfo && userAdd) {
      document.getElementById("d-fName").textContent = userInfo.firstName;
      document.getElementById("d-lName").textContent = userInfo.lastName;
      document.getElementById("d-mobile").textContent = userInfo.mobile;
      document.getElementById("d-email").textContent = userInfo.email;
      document.getElementById("d-address").textContent = userAdd.address;
      document.getElementById("d-landmark").textContent = userAdd.landmark;
      document.getElementById("d-pincode").textContent = userAdd.pincode;
      document.getElementById("d-city").textContent = userAdd.city;
    }
  }
});

displayCart();