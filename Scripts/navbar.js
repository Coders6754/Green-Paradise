let navbar_bigscreen = document.getElementById("navbar_bigscreen_container");
let navbar_smallscreen = document.getElementById(
  "navbar_smallscreen_container"
);

function navbarBigscreen() {
  navbar_bigscreen.innerHTML = `<div id="navbar_bigscreen">
    <div id="first_bigscreen">
      <a href="/index.html">Green paradise</a>
    </div>
    <div id="middle_bigscreen">
      <a href="/Product_Page/index.html" class="catalog_link">Catalog</a>
      <a href="#">Sale</a>
      <a href="/checkout.html">Delivery and payment</a>
      <a href="#">Contact</a>
    </div>
    <div id="last_bigscreen">
      <div id="search_bigscreen">
        <div><input type="text" placeholder="Search products...." id="search_bigscreen_input"/></div>
        <div class="icon_bigscreen">
          <img src="/Images/navbar_images/search-icon.svg" alt="" />
        </div>
      </div>
    
      <div id="login1_bigscreen" class="login_form"><a href="#" style="text-decoration:none; color:#486e00">Login</a></div>
      <div id="login2_bigscreen">
        <div class="icon_bigscreen">
          <img src="/Images/navbar_images/human-icon.svg" alt="" />
        </div>
        <div class="icon_bigscreen">
          <img src="/Images/navbar_images/arrow-icon.svg" alt="" />
        </div>
      </div>
      <div id="cart_bigscreen">
        <div class="icon_bigscreen">
          <img src="/Images/navbar_images/bucket-icon.svg" alt="" />
        </div>
        <div id="quantity_bigscreen">0</div>
      </div>
    </div>
    </div>
    
    <div id="dropdowns_bigscreen">
    <div>
      <div id="search_bigscreen_dropdown">
        <div>No results...</div>
      </div>
      <div id="login2_bigscreen_dropdown">
        <div id="user_dropdown_bigscreen" class="dropdowns_user_bigscreen">
          Ashutosh Verma
        </div>
        <div id="cart_dropdown_bigscreen" class="dropdowns_user_bigscreen">
          Cart
        </div>
        <div
          id="logout_dropdown_bigscreen"
          class="dropdowns_user_bigscreen"
        >
          Logout
        </div>
      </div>
    </div>
    </div>`;
}

function navbarSmallscreen() {
  navbar_smallscreen.innerHTML = ` <div id="navbar_smallscreen">
    <div id="first_smallscreen">
      <a href="/index.html">Green Paradise</a>
    </div>

    <div id="second_smallscreen">
      <div id="search_smallscreen">
        <div class="icon_bigscreen">
          <img src="/Images/navbar_images/search-icon.svg" alt="" />
        </div>
      </div>

      <div id="login1_smallscreen"><a href="#" style="text-decoration:none; color:#486e00">Login</a></div>

      <div id="login2_smallscreen">
        <div class="icon_bigscreen">
          <img src="/Images/navbar_images/human-icon.svg" alt="" />
        </div>
      </div>

      <a href="#" style="text-decoration:none">
        <div id="cart_smallscreen">
          <div class="icon_bigscreen">
            <img src="/Images/navbar_images/bucket-icon.svg" alt="" />
          </div>
          <div id="quantity_smallscreen">0</div>
        </div>
      </a>
    </div>
    <div id="third_smallscreen">
      <div class="icon_bigscreen">
        <img src="/Images/navbar_images/list-icon.svg" alt="" />
      </div>
    </div>
  </div>

  <!-- drop downs for small screen -->
  <div id="dropdowns_small_screen">
    <div>
      <input type="text" placeholder="Search for plants, seeds and products etc..." id="input_smallscreen"/>
    </div>
    <div id="search_result_smallscreen">
      <div>Product1</div>
    </div>
  </div>
  <div id="humburger_icon_menu">
    <div>
      <div class="username_cart_mobile">
        <a href="#" id="mobile_username">UserName</a>
        <a href="/checkout.html">My Cart</a>
      </div>
      
      <div>
      <h4>Categories</h4>
      <a href="#">Plants</a>
      <a href="#">Seeds</a>
      <a href="#">Pots & Planters</a>
      <a href="#">Plant Care</a>
     </div>
     
      <div>
      <h4>Others</h4>
        <a href="/Product_Page/index.html" class="catalog_link">Catalog</a>
        <a href="#">Sale</a>
        <a href="#">Delivery and Payment</a>
        <a href="#">Contact</a>
        <a href="#">About us</a>
      </div>
      <div id="logout_button_mobile">
        <a href="#" >Logout</a>
      </div>
    </div>
  </div>`;
}

let login_screen = document.getElementById("popup_login");
function loginScreen() {
  login_screen.innerHTML = ` <div class="parent">
  <div>
    <h2>Green paradise</h2>
    <div id="closing_login">
      <img src="/Images/navbar_images/cross-svgrepo-com.svg" alt="" />
    </div>
  </div>
  <h5 id="login" class="h2" tabindex="-1">Welcome back! Sign in with</h5>
  <div id="images">
  <div>
      <img id="fb" src="/Images/navbar_images/facebook.png" alt="" />
    </div>
    <div>
      <img id="google_auth" src="/Images/navbar_images/google.webp" alt="" />
    </div>
  </div>
  <form id="form1" class="form">
    <div class="child">
      <!-- <label for="email">* Email address</label> -->
      <input type="email" id="email1" placeholder="Email" class = "email" required="" />
    </div>

    <div class="child">
      <!-- <label for="password">* Password</label> -->
      <input
        type="password"
        id="password1"
        class = "password"
        placeholder="Password"
        required=""
      />
    </div>

    <div class="child">
      <button class="ls_btn" type="submit" id="signin_button">SIGN IN</button>
    </div>
  </form>
  <a id="forget_password" href=""
    >Forgot password?</a
  >
  
  <p class="account_create">New here?<span id="go_to_from_login" class="buttons_log"> Create an account</span></p>
</div>`;
}

let signup_screen = document.getElementById("popup_signup");

function signupScreen() {
  signup_screen.innerHTML = `<div class="parent">
  <div>
    <h2>Create an email account</h2>
    <div id="closing_signup">
      <img src="/Images/navbar_images/cross-svgrepo-com.svg" alt="" />
    </div>
  </div>

  <form id="form2" class="form">
    <div class="child">
      <label for="username">* Full Name</label>
      <input type="text" id="username" required />
    </div>

    <div class="child">
      <label for="email">* Email address</label>
      <input type="email" id="email2"  class = "email"required />
    </div>

    <div class="child">
      <label for="password">* Password</label>
      <input type="password" required />
    </div>

    <div class="child">
      <label for="confirmpassword">* Confirm Password</label>
      <input type="password" id="confirmpassword"  class = "password" required />
    </div>

    <div class="child">
      <label for="phone">Cell Phone Number<span>(Optional)</span></label>
      <input type="number" id="number" />
    </div>

    <div class="child">
      <button class="ls_btn" type="submit" id="signup_by_email">CONTINUE</button>
    </div>

    
    <p class="account_create">Already a user? <span id="go_to_from_sign_up" class="buttons_log"> Login </span></p>
    
  </form>
</div>`;
}
{
  /* <p id="account_create">New here?<span id="go_to_from_login" class="buttons_log"> Create an account</span></p>

<p id="go_to_from_sign_up" class="buttons_log">Login</p> */
}
navbarBigscreen();
navbarSmallscreen();
loginScreen();
signupScreen();

//------------------- routing of pages --------------------------->>
document.getElementById("cart_bigscreen").addEventListener("click", () => {
  window.location = "/checkout.html";
});
// --------------------------quantity big screen----------------->>
let productsQty = JSON.parse(localStorage.getItem("cart")) || [];
let qty = document.getElementById("quantity_bigscreen");
let qty2 = document.getElementById("quantity_smallscreen");
let netqty = 0;
productsQty.forEach((ele) => {
  netqty = netqty + Number(ele.qty);
  qty.textContent = netqty;
  qty2.textContent = netqty;
});
//------------------------Big screen functionality -------------------------->>
document
  .getElementById("login2_bigscreen")
  .addEventListener("click", (event) => {
    event.stopPropagation();
    let menu = document.getElementById("login2_bigscreen_dropdown");

    let display = window.getComputedStyle(menu).display;

    if (display === "none" || display === "") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  });
document
  .getElementById("user_dropdown_bigscreen")
  .addEventListener("click", () => {
    window.location = "/index.html";
  });
document
  .getElementById("cart_dropdown_bigscreen")
  .addEventListener("click", () => {
    window.location = "/checkout.html";
  });

document.getElementById("cart_smallscreen").addEventListener("click", () => {
  window.location = "/checkout.html";
});

document
  .getElementById("login2_bigscreen_dropdown")
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });
// --------------------login and signup buttons ----------------------->>
document.getElementById("login1_bigscreen").addEventListener("click", () => {
  let menu = document.getElementById("popup_login");
  menu.style.display = "flex";
});
document.getElementById("closing_login").addEventListener("click", () => {
  let menu = document.getElementById("popup_login");
  menu.style.display = "";
});

document.getElementById("go_to_from_sign_up").addEventListener("click", () => {
  let menu = document.getElementById("popup_signup");
  let menu2 = document.getElementById("popup_login");
  menu.style.display = "";
  menu2.style.display = "block";
});
document.getElementById("closing_signup").addEventListener("click", () => {
  let menu = document.getElementById("popup_signup");
  menu.style.display = "";
});
document.getElementById("go_to_from_login").addEventListener("click", () => {
  let menu = document.getElementById("popup_signup");
  let menu2 = document.getElementById("popup_login");
  menu2.style.display = "";
  menu.style.display = "block";
});

//----------------------- Small Screen FUnctionality ------------------------->>
//humbuger icon open and close
document.getElementById("third_smallscreen").addEventListener("click", () => {
  let menu = document.getElementById("humburger_icon_menu");
  let display = window.getComputedStyle(menu).display;

  if (display === "none" || display === "") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});

//Login open and close
document.getElementById("login2_smallscreen").addEventListener("click", () => {
  let menu = document.getElementById("humburger_icon_menu");
  let display = window.getComputedStyle(menu).display;

  if (display === "none" || display === "") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});

//Search open and close
document
  .getElementById("search_smallscreen")
  .addEventListener("click", (event) => {
    event.stopPropagation();
    let menu = document.getElementById("dropdowns_small_screen");
    let display = window.getComputedStyle(menu).display;
    console.log(display);
    if (display === "none" || display === "") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });

document.getElementById("login1_smallscreen").addEventListener("click", () => {
  let menu = document.getElementById("popup_login");
  menu.style.display = "flex";
});

//before that check of something is present in the user data
let userData = JSON.parse(localStorage.getItem("userData")) || {};

if (
  userData.login_status == "" ||
  userData.login_status == null ||
  userData.login_status == undefined ||
  userData.login_status == "loggedOut"
) {
  document.getElementById("login1_bigscreen").style.display = "flex";
  document.getElementById("login2_bigscreen").style.display = "";
  document.getElementById("login1_smallscreen").style.display = "flex";
  document.getElementById("login2_smallscreen").style.display = "";
  document.getElementById("mobile_username").textContent = "Login";
  document.getElementById("logout_button_mobile").style.display = "";
} else {
  document.getElementById("mobile_username").textContent = userData.username;
  document.getElementById("user_dropdown_bigscreen").innerText =
    userData.username;
  document.getElementById("login1_bigscreen").style.display = "";
  document.getElementById("login2_bigscreen").style.display = "flex";
  document.getElementById("login1_smallscreen").style.display = "";
  document.getElementById("login2_smallscreen").style.display = "flex";
  document.getElementById("logout_button_mobile").style.display = "block";
}
//--------------------------- Username click fix ------------------------------->>
let username_mobile = document.querySelector("#mobile_username");
username_mobile.addEventListener("click", () => {
  if (username_mobile.textContent == "Login") {
    let menu = document.getElementById("popup_login");
    menu.style.display = "flex";
  } else {
    window.location = "/index.html";
  }
});

// ------------------------- Login and signup functionality ------------------->>

// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyhLvPLl1z0fJyGgzVwXo5m0mYO60W47U",
  authDomain: "green-paradise-75c72.firebaseapp.com",
  projectId: "green-paradise-75c72",
  storageBucket: "green-paradise-75c72.appspot.com",
  messagingSenderId: "647348363237",
  appId: "1:647348363237:web:49295771dad6b05469190c",
  measurementId: "G-NGTCGYYT5G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
//-------------------------SignUp------------------------------>>
let signup_by_email = document.getElementById("signup_by_email");
console.log(signup_by_email);
signup_by_email.addEventListener("click", (event) => {
  event.preventDefault();
  let email = document.getElementById("email2").value;
  let password = document.getElementById("confirmpassword").value;
  let username = document.getElementById("username").value;
  // let pass = document.getElementById("password").value;

  if (email != "" && password != "" && username != "") {
    console.log(username);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        userData = {
          username: username,
          login_status: "loggedIn",
        };
        signup_screen.style.display = "";
        document.getElementById("user_dropdown_bigscreen").innerText =
          userData.username;
        document.getElementById("mobile_username").textContent =
          userData.username;
        document.getElementById("login1_bigscreen").style.display = "";
        document.getElementById("login2_bigscreen").style.display = "flex";
        document.getElementById("login1_smallscreen").style.display = "";
        document.getElementById("login2_smallscreen").style.display = "flex";
        document.getElementById("logout_button_mobile").style.display = "block";
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("You have already signed up, please login!");
        // ..
      });
  }
});

//--------------------------------Login------------------------>>
let signin_button = document.getElementById("signin_button");
signin_button.addEventListener("click", (event) => {
  event.preventDefault();
  let email = document.getElementById("email1").value;
  let password = document.getElementById("password1").value;

  if (email != "" && password != "") {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        let name = userData.username;

        userData = {
          username: name,
          login_status: "loggedIn",
        };
        login_screen.style.display = "";
        document.getElementById("user_dropdown_bigscreen").innerText =
          userData.username;
        document.getElementById("mobile_username").textContent =
          userData.username;
        document.getElementById("login1_bigscreen").style.display = "";
        document.getElementById("login2_bigscreen").style.display = "flex";
        document.getElementById("login1_smallscreen").style.display = "";
        document.getElementById("login2_smallscreen").style.display = "flex";
        document.getElementById("logout_button_mobile").style.display = "block";
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Email or password is wrong!");
      });
  }
});

// ---------------------logout-------------------->>
let logout_bigscreen = document.getElementById("logout_dropdown_bigscreen");

logout_bigscreen.addEventListener("click", () => {
  console.log("clicked");
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("logout done");
      let name = userData.username;
      userData = {
        username: name,
        login_status: "loggedOut",
      };
      document.getElementById("mobile_username").textContent = "Login";
      document.getElementById("login2_bigscreen_dropdown").style.display = "";
      document.getElementById("login1_bigscreen").style.display = "flex";
      document.getElementById("login2_bigscreen").style.display = "";
      document.getElementById("login1_smallscreen").style.display = "flex";
      document.getElementById("login2_smallscreen").style.display = "";

      localStorage.setItem("userData", JSON.stringify(userData));
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
});

document
  .getElementById("logout_button_mobile")
  .addEventListener("click", () => {
    console.log("clicked");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("logout done");
        let name = userData.username;

        userData = {
          username: name,
          login_status: "loggedOut",
        };
        document.getElementById("mobile_username").textContent = "Login";
        document.getElementById("logout_button_mobile").style.display = "";
        document.getElementById("login2_bigscreen_dropdown").style.display = "";
        document.getElementById("login1_bigscreen").style.display = "flex";
        document.getElementById("login2_bigscreen").style.display = "";
        document.getElementById("login1_smallscreen").style.display = "flex";
        document.getElementById("login2_smallscreen").style.display = "";
        localStorage.setItem("userData", JSON.stringify(userData));
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  });
// -------------------------google-------------------->>>

const provider = new GoogleAuthProvider();
document.getElementById("google_auth").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      userData = {
        username: user.displayName,
        login_status: "loggedIn",
      };

      login_screen.style.display = "";
      document.getElementById("user_dropdown_bigscreen").innerText =
        userData.username;
      document.getElementById("mobile_username").textContent =
        userData.username;
      document.getElementById("login1_bigscreen").style.display = "";
      document.getElementById("login2_bigscreen").style.display = "flex";
      document.getElementById("login1_smallscreen").style.display = "";
      document.getElementById("login2_smallscreen").style.display = "flex";
      document.getElementById("logout_button_mobile").style.display = "block";
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});

//Search functionality add product here by creating a div and append it
let add_searched_product = document.getElementById("search_result_smallscreen");

// -----------------------------search functionality ----------------------->>>
let products = [
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/Aimage.webp",
    name: "Lucky Bamboo Plant - 3 Layer",
    price: "399",
    category: "Houseplants",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/AtlantisPlanter-PastelBlue.webp",
    name: "Peace Lily Plant",
    price: "299",
    category: "Houseplants",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/AtlantisPlanter-PastelPink.webp",
    name: "Money Plant Golden",
    price: "299",
    category: "Houseplants",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/AtlantisPlanter-Teal_dc150664.webp",
    name: "Snake Plant - Golden Hahnii",
    price: "299",
    category: "Houseplants",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/AtlantisPlanter-Teal.webp",
    name: "Areca Palm Plant XL",
    price: "2499",
    category: "Houseplants",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/DSC_2431.webp",
    name: "Areca Palm Plant",
    price: "499",
    category: "Houseplants",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/LagosPlanter-Mocca.webp",
    name: "Syngonium Pink Plant",
    price: "249",
    category: "Houseplants",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/LagosPlanter-Grey.webp",
    name: "Jade Plant Mini",
    price: "249",
    category: "Houseplants",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/small-atlantis.webp",
    name: "Broken Heart Plant",
    price: "249",
    category: "Houseplants",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/SpiroCeramicPot-White.webp",
    name: "Bamboo Palm Plant",
    price: "399",
    category: "Houseplants",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/Venice12Planter-Black.webp",
    name: "Ficus Bonsai Plant",
    price: "799",
    category: "Houseplants",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/air-purifying-bundle.png",
    name: "Areca Palm, Sansevieria Futura Superba",
    price: "999",
    category: "Houseplant Sets",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/air-purifying-bundle.webp",
    name: "Syngonium Pink, Money N Joy",
    price: "999",
    category: "Houseplant Sets",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/sleep-better-bundle.webp",
    name: "The Sleep Better Bundle",
    price: "1299",
    category: "Houseplant Sets",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/rubber-variegated-and-aglaonema-pink.webp",
    name: "Rubber Variegated and Aglaonema Pink",
    price: "1199",
    category: "Houseplant Sets",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/zz-peace-lily.webp",
    name: "ZZ, Peace Lily",
    price: "999",
    category: "Houseplant Sets",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/living-room-bundle.webp",
    name: "The Living Room Bundle",
    price: "1299",
    category: "Houseplant Sets",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/tabletop-succulent-bundle.webp",
    name: "The Tabletop Succulent Bundle",
    price: "1599",
    category: "Houseplant Sets",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/low-maintenance-bundle.webp",
    name: "The Low Maintenance Bundle",
    price: "1299",
    category: "Houseplant Sets",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/sun-loving-succulent-bundle.webp",
    name: "The Sun-loving Succulent Bundle",
    price: "1499",
    category: "Houseplant Sets",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/4-inch-set-of-6-gardening-pots.webp",
    name: "The Sun-loving Succulent Bundle",
    price: "1499",
    category: "Flowerpot",
    subcategory: "Plastic Pots",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/small-white-stone-pebble.webp",
    name: "Pebble Planter",
    price: "599",
    category: "Flowerpot",
    subcategory: "Plastic Pots",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/7.5-inch-set-of-5-multi-1.webp",
    name: "Ugaoo Krish Self Watering Planter",
    price: "149",
    category: "Flowerpot",
    subcategory: "Plastic Pots",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/DSC_5784.webp",
    name: "Frosted Ceramic Pot",
    price: "599",
    category: "Flowerpot",
    subcategory: "Ceramic Pots",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/rose-red-apple-ceramic-pot.webp",
    name: "Apple Ceramic Pot",
    price: "799",
    category: "Flowerpot",
    subcategory: "Ceramic Pots",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/AImageWithPlant-2.webp",
    name: "Spiro Ceramic Pot",
    price: "399",
    category: "Flowerpot",
    subcategory: "Ceramic Pots",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/hanging-pyramids-planter.webp",
    name: "Hanging Pyramids Planter",
    price: "1799",
    category: "Flowerpot",
    subcategory: "Metallic Pots",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/white-nyx-planter.webp",
    name: "Nyx Planter",
    price: "349",
    category: "Flowerpot",
    subcategory: "Metallic Pots",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/dove-planter.webp",
    name: "Dove Planter",
    price: "1999",
    category: "Flowerpot",
    subcategory: "Metallic Pots",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/5-kg-garden-soil-mix.webp",
    name: "Garden Soil Mix",
    price: "349",
    category: "Soil",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/cocopeat-block.webp",
    name: "Cocopeat Block",
    price: "199",
    category: "Soil",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/cactus-succulent-potting-mix-5-kg.webp",
    name: "Cactus & Succulent Potting Mix - 5 kg",
    price: "499",
    category: "Soil",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/pot-o-mix-5-kg-potting-mix.webp",
    name: "Pot-O-Mix - 5 Kg Potting Mix",
    price: "399",
    category: "Soil",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/garden_red_soil.webp",
    name: "Garden Red Soil",
    price: "199",
    category: "Soil",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/5-kg-cow-manure.webp",
    name: "Cow Manure",
    price: "199",
    category: "Fertilizer",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/5-kg-vermicompost.webp",
    name: "Vermicompost",
    price: "199",
    category: "Fertilizer",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/organic-manure-1-kg.webp",
    name: "Organic Manure - 1 Kg",
    price: "199",
    category: "Fertilizer",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/perlite-250gm.webp",
    name: "Perlite - 250gm",
    price: "199",
    category: "Fertilizer",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/epsom-salt-1-kg.webp",
    name: "Epsom Salt - 1 kg",
    price: "199",
    category: "Fertilizer",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/plant-fertilizer-pellets-1-kg.webp",
    name: "Plant Fertilizer Pellets - 1 Kg",
    price: "299",
    category: "Fertilizer",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/organic-manure-1-kg.webp",
    name: "Organic Manure - 1 Kg",
    price: "199",
    category: "Fertilizer",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/Plant_Tonic.webp",
    name: "Seaweed Extract Fertilizer - Plant Tonic 250 ml",
    price: "299",
    category: "Fertilizer",
  },
  {
    description:
      "The bigger cousin of the beautiful peace lily, the Spathiphyllum Sensation is one of the most loved peace lily varieties in the world. In addition to its majestic white flowers, it has large, glossy, oblong leaves that are excellent air purifiers. The best part is its ease of growth and low-maintenance nature which makes it a perfect choice for first-time gardeners.",
    care: "Always check your plants before watering, the topsoil should be dry to touch. For succulents allow the potting mix to dry completely before watering again.Place your plants on window sills where it can get the brightest possible indirect light. Bright indirect light is when the plant is within a couple of feet of a natural source of light.",
    img: "./images/Plant_Tonic.webp",
    name: "Seaweed Extract Fertilizer - Plant Tonic 100 ml",
    price: "199",
    category: "Fertilizer",
  },
];
let input = document.querySelector("#search_bigscreen_input");

function search(text, arr) {
  let fil = arr.filter((ele) => {
    let str = ele.name.toLowerCase();
    return str.includes(text);
  });
  return fil;
}

let cartData = JSON.parse(localStorage.getItem("Current_Product")) || {};
let debounce;
input.addEventListener("input", (event) => {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    event.stopPropagation();
    let mainDiv = document.querySelector("#search_bigscreen_dropdown");
    mainDiv.style.display = "block";
    mainDiv.innerHTML = "";
    let val = input.value.toLowerCase();
    let arr = search(val, products);
    let t = 0;
    console.log(arr.length);
    if (arr.length > 0) {
      for (let ele of arr) {
        t++;
        if (t <= 4) {
          let div = document.createElement("div");
          div.innerText = ele.name;
          div.addEventListener("click", () => {
            cartData = ele;
            localStorage.setItem("Current_Product", JSON.stringify(cartData));
            //give the location of description page
            window.location = "/Product_Page/Product_Detail_Page.html";
          });
          mainDiv.append(div);
          console.log(ele);
        } else {
          break;
        }
      }
    } else {
      let div = document.createElement("div");
      div.innerText = "No results...";
      mainDiv.append(div);
    }

    // console.log();
  }, 500);
});
// ---------------------------for mobile ------------------------>>
let input_smallScreen = document.querySelector("#input_smallscreen");

let debo;
input_smallScreen.addEventListener("input", (event) => {
  // event.stopPropagation();
  clearTimeout(debounce);
  debo = setTimeout(() => {
    event.stopPropagation();
    let mainDiv = document.querySelector("#search_result_smallscreen");
    mainDiv.style.display = "block";
    mainDiv.innerHTML = "";
    let val = input_smallscreen.value.toLowerCase();
    let arr = search(val, products);
    let t = 0;
    console.log(arr.length);
    if (arr.length > 0) {
      for (let ele of arr) {
        t++;
        if (t <= 4) {
          let div = document.createElement("div");
          div.innerText = ele.name;
          div.addEventListener("click", () => {
            cartData = ele;
            localStorage.setItem("Current_Product", JSON.stringify(cartData));
            //give the location of description page
            window.location = "/Product_Page/Product_Detail_Page.html";
          });
          mainDiv.append(div);
          console.log(ele);
        } else {
          break;
        }
      }
    } else {
      let div = document.createElement("div");
      div.innerText = "No results...";
      mainDiv.append(div);
    }

    // console.log();
  }, 500);
});

//-------------------------------for not propogating--------------->>>
const dropdownElement = document.querySelector("#search_bigscreen_dropdown");
dropdownElement.addEventListener("click", function (event) {
  // Prevent the click event from propagating to the document body
  event.stopPropagation();
});
document
  .querySelector("#dropdowns_small_screen")
  .addEventListener("click", function (event) {
    // Prevent the click event from propagating to the document body
    event.stopPropagation();
  });
document
  .querySelector("#search_result_smallscreen")
  .addEventListener("click", function (event) {
    // Prevent the click event from propagating to the document body
    event.stopPropagation();
  });

document.body.addEventListener("click", function () {
  // Hide the dropdown when clicking anywhere else on the body
  dropdownElement.style.display = "none";
  document.getElementById("login2_bigscreen_dropdown").style.display = "none";
  document.querySelector("#dropdowns_small_screen").style.display = "none";
  document.querySelector("#search_result_smallscreen").style.display = "none";
});

export { navbarBigscreen, navbarSmallscreen, loginScreen, signupScreen };
