
// let curr = JSON.parse(localStorage.getItem("Current_Product"));
// console.log(curr);
// let banner = document.getElementById("banner");
// banner.src = curr.img;
// let productName = document.getElementById("product_name");
// productName.innerText = curr.name;
// document.getElementById("heading_Price").style.width = `${
//   curr.name.length * 17
// }px`;
// let productPrice = document.getElementById("product_price");
// productPrice.innerText = "₹" + curr.price;



// ///
// let qty = document.getElementById("quantity_bigscreen");
// let netqty = 0;
// cart.forEach((ele) => {
//   netqty = netqty + Number(ele.qty);
//   document.getElementById("quantity_smallscreen").textContent = netqty;
//   qty.textContent = netqty;
//   ///
// });


// let addButton = document.getElementById("add_button");
// addButton.onclick = () => {
//   addButton.disabled = true;
//   addButton.innerText = "Added";
//   let alreadyPresent = false;
//   cart.map((el) => {
//     if (el.img === curr.img) {
//       el.qty = el.qty + 1;
//       ///
//       let qty = document.getElementById("quantity_bigscreen");

//       let netqty = 0;
//       cart.forEach((ele) => {
//         netqty = netqty + Number(ele.qty);
//         document.getElementById("quantity_smallscreen").textContent = netqty;
//         qty.textContent = netqty;
//       });
//       ///
//       alreadyPresent = true;
//     }
//   });
//   curr.qty = 1;

//   if (!alreadyPresent) cart.push(curr);

//   localStorage.setItem("cart", JSON.stringify(cart));
//   ///
//   let qty = document.getElementById("quantity_bigscreen");
//   let netqty = 0;
//   cart.forEach((ele) => {
//     netqty = netqty + Number(ele.qty);
//     document.getElementById("quantity_smallscreen").textContent = netqty;
//     qty.textContent = netqty;
//   });
//   ///
//   setTimeout(() => {
//     addButton.innerText = "Add To Basket";
//     addButton.disabled = false;
//   }, 750);
// };
// document.getElementById("catalog_link").onclick = () => {
//   console.log("catalog_link");
//   window.location.assign("./index.html");
// };




document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from the JSON server
  fetch("https://new-plant-json-server.onrender.com/products")
    .then((response) => response.json())
    .then((data) => {
      // Assuming you want to display the first product in the JSON data
      const product = data[0];

      // Display the product data in your HTML
      let banner = document.getElementById("banner");
      banner.src = product.productImage[0]; // Use the first image URL

      let productName = document.getElementById("product_name");
      productName.innerText = product.productName;

      document.getElementById("heading_Price").style.width = `${
        product.productName.length * 17
      }px`;

      let productPrice = document.getElementById("product_price");
      productPrice.innerText = "₹" + product.price;

      // Set the product description
      let description = document.getElementById("description");
      description.innerText = product.productDescription;

      // Handle button click event to add the product to the cart or perform other actions
      let addButton = document.getElementById("add_button");
      addButton.onclick = () => {
        addButton.disabled = true;
        addButton.innerText = "Added";
        // You can add the product to the cart or perform other actions here
        // ...

        setTimeout(() => {
          addButton.innerText = "Add To Basket";
          addButton.disabled = false;
        }, 1000);
      };
    })
    .catch((error) => {
      console.error("Error fetching product data:", error);
    });
});











