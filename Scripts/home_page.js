import { navbarBigscreen, navbarSmallscreen } from "./navbar.js";
// -----------for footer------------>>
import footer from "../Product_Page/components/footer/footer.js";
document.getElementById("footer").innerHTML = footer();
//-------------for popular products-------------->>
import popularProducts, {
  popularProductsRender,
} from "../Product_Page/components/popular_products_container/popular_products_container.js";
let nextPopProd = document.getElementById("next_popular_product");
let prevPopProd = document.getElementById("prev_popular_product");

let popStart = 0;

nextPopProd.onclick = () => {
  popStart = popularProductsRender("./Product_Page", popStart, 3);
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
  popStart = popularProductsRender("./Product_Page", popStart - 8, 4);
  if (popStart == 0 || popStart == 4) {
    prevPopProd.disabled = true;
    prevPopProd.style.backgroundColor = "lightgray";
  }
  if (popStart < popularProducts.length) {
    nextPopProd.disabled = false;
    nextPopProd.style.backgroundColor = "#486e00";
  }
};
window.onload = () => {
  popStart = popularProductsRender("./Product_Page/", popStart, 4);
};
prevPopProd.disabled = true;
prevPopProd.style.backgroundColor = "lightgray";
