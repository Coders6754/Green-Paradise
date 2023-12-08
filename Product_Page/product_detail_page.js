import { navbarBigscreen, navbarSmallscreen } from "../Scripts/navbar.js";
import popularProducts, {
  popularProductsRender,
} from "./components/popular_products_container/popular_products_container.js";
import footer from "./components/footer/footer.js";
let curr = JSON.parse(localStorage.getItem("Current_Product"));
console.log(curr);
let banner = document.getElementById("banner");
banner.src = curr.img;
let productName = document.getElementById("product_name");
productName.innerText = curr.name;
document.getElementById("heading_Price").style.width = `${
  curr.name.length * 17
}px`;
let productPrice = document.getElementById("product_price");
productPrice.innerText = "₹" + curr.price;

let nextPopProd = document.getElementById("next_popular_product");
let prevPopProd = document.getElementById("prev_popular_product");

let popStart = 0;

nextPopProd.onclick = () => {
  popStart = popularProductsRender("", popStart, 3);
  if (popStart >= popularProducts.length) {
    nextPopProd.disabled = true;
    nextPopProd.style.backgroundColor = "lightgray";
  }
  if (popStart > 0) {
    prevPopProd.disabled = false;
    prevPopProd.style.backgroundColor = "#486e00";
  }
};

prevPopProd.onclick = () => {
  popStart = popularProductsRender("", popStart - 6, 3);
  if (popStart == 0 || popStart == 3) {
    prevPopProd.disabled = true;
    prevPopProd.style.backgroundColor = "lightgray";
  }
  if (popStart < popularProducts.length) {
    nextPopProd.disabled = false;
    nextPopProd.style.backgroundColor = "#486e00";
  }
};
window.onload = () => {
  popStart = popularProductsRender("", popStart, 3);
};
prevPopProd.disabled = true;
prevPopProd.style.backgroundColor = "lightgray";
let cart = JSON.parse(localStorage.getItem("cart")) || [];
///
let qty = document.getElementById("quantity_bigscreen");
let netqty = 0;
cart.forEach((ele) => {
  netqty = netqty + Number(ele.qty);
  document.getElementById("quantity_smallscreen").textContent = netqty;
  qty.textContent = netqty;
  ///
});

document.querySelector("#footer").innerHTML = footer();
let addButton = document.getElementById("add_button");
addButton.onclick = () => {
  addButton.disabled = true;
  addButton.innerText = "Added";
  let alreadyPresent = false;
  cart.map((el) => {
    if (el.img === curr.img) {
      el.qty = el.qty + 1;
      ///
      let qty = document.getElementById("quantity_bigscreen");

      let netqty = 0;
      cart.forEach((ele) => {
        netqty = netqty + Number(ele.qty);
        document.getElementById("quantity_smallscreen").textContent = netqty;
        qty.textContent = netqty;
      });
      ///
      alreadyPresent = true;
    }
  });
  curr.qty = 1;

  if (!alreadyPresent) cart.push(curr);

  localStorage.setItem("cart", JSON.stringify(cart));
  ///
  let qty = document.getElementById("quantity_bigscreen");
  let netqty = 0;
  cart.forEach((ele) => {
    netqty = netqty + Number(ele.qty);
    document.getElementById("quantity_smallscreen").textContent = netqty;
    qty.textContent = netqty;
  });
  ///
  setTimeout(() => {
    addButton.innerText = "Add To Basket";
    addButton.disabled = false;
  }, 750);
};
document.getElementById("catalog_link").onclick = () => {
  console.log("catalog_link");
  window.location.assign("./index.html");
};
