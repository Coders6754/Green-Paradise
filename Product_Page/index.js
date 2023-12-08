import { navbarBigscreen, navbarSmallscreen } from "../Scripts/navbar.js";

import footer from "./components/footer/footer.js";
import products, {
  render,
} from "./components/product_container/product_container.js";
import popularProducts, {
  popularProductsRender,
} from "./components/popular_products_container/popular_products_container.js";
let body = document.querySelector("body");
let i = 1,
  throttler = false;
window.onscroll = () => {
  if (throttler) return;
  throttler = true;
  setTimeout(() => {
    throttler = false;
  }, 100);
  if (Math.ceil(window.scrollY) > i * 700) {
    console.log(Math.ceil(window.scrollY));
    start = render(data, start, 6, "scroll");
    i++;
  }
};
document.getElementById("footer").innerHTML = footer();
let houseplants = false,
  houseplant_sets = false,
  flowerpots = false,
  soil_fertilizers = false;
let houseplantFilter = document.getElementById("houseplant_filter");
let data = products,
  start = 0;
houseplantFilter.onchange = () => {
  houseplants = !houseplants;
  data = sortNfilter();
  start = render(data, 0);
  i = 1;
};

let priceRangeFilter = document.getElementById("price_range_filter");
priceRangeFilter.onchange = () => {
  data = sortNfilter();
  start = render(data, 0);
  i = 1;
};
let houseplantSetsFilter = document.getElementById("houseplant_set_filter");
houseplantSetsFilter.onchange = () => {
  houseplant_sets = !houseplant_sets;
  data = sortNfilter();
  start = render(data, 0);
  i = 1;
};
let flowerpotFilter = document.getElementById("flowerpot_filter");
flowerpotFilter.onchange = () => {
  flowerpots = !flowerpots;
  data = sortNfilter();
  start = render(data, 0);
  i = 1;
};
let soilFertilizerFilter = document.getElementById(
  "soil_and_fertilizers_filter"
);
soilFertilizerFilter.onchange = () => {
  soil_fertilizers = !soil_fertilizers;
  data = sortNfilter();
  start = render(data, 0);
  i = 1;
};
let sorting = document.getElementById("sorting");
sorting.onchange = () => {
  data = sortNfilter();
  start = render(data, 0);
  i = 1;
};
document.getElementById("reset_filters").onclick = () => {
  if (houseplants) houseplantFilter.click();
  if (houseplant_sets) houseplantSetsFilter.click();
  if (flowerpots) flowerpotFilter.click();
  if (soil_fertilizers) soilFertilizerFilter.click();
  priceRangeFilter.value = 2500;
  data = sortNfilter();
  start = render(data, 0);
};
let sortNfilter = () => {
  let filtered = productFilter();
  let sortedNFiltered = productSort(filtered);
  return sortedNFiltered;
};
let productFilter = () => {
  let priceRange = parseInt(priceRangeFilter.value);
  data = products.filter((el) => {
    if (!houseplants && !houseplant_sets && !flowerpots && !soil_fertilizers)
      return el.price <= priceRange;
    let res = false;
    if (houseplants && el.category === "Houseplants") res = true;
    if (houseplant_sets && el.category === "Houseplant Sets") res = true;
    if (flowerpots && el.category === "Flowerpot") res = true;
    if (
      soil_fertilizers &&
      (el.category === "Soil" || el.category === "Fertilizer")
    )
      res = true;
    return el.price <= priceRange && res;
  });
  return data;
};
let productSort = (data) => {
  let val = sorting.value;
  let temp = [...data];
  if (val === "atoz") return temp.sort((a, b) => a.name.localeCompare(b.name));
  else if (val === "ztoa")
    return temp.sort((a, b) => -a.name.localeCompare(b.name));
  else if (val === "lowtohigh") return temp.sort((a, b) => a.price - b.price);
  else if (val === "hightolow") return temp.sort((a, b) => b.price - a.price);
  else return temp;
};
let nextPopProd = document.getElementById("next_popular_product");
let prevPopProd = document.getElementById("prev_popular_product");

let popStart = 0;

nextPopProd.onclick = () => {
  popStart = popularProductsRender("", popStart, 4);
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
  popStart = popularProductsRender("", popStart - 6, 4);
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
  start = render(products, 0);
  popStart = popularProductsRender("./", popStart, 4);
};
for (let elem of document.getElementsByClassName("catalog_link")) {
  elem.disabled = true;
  elem.style.color = "darkgray";
}
prevPopProd.disabled = true;
prevPopProd.style.backgroundColor = "lightgray";
