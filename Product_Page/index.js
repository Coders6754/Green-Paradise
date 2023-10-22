// // Function to fetch and display products
// async function fetchProducts() {
//     try {
//         const response = await fetch('https://new-plant-json-server.onrender.com/products');
//         const products = await response.json();
//         displayProducts(products);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// // Function to display products
// function displayProducts(products) {
//     const productCatalog = document.querySelector('.product_catalog');

//     products.forEach(product => {
//         const productCard = createProductCard(product);
//         productCatalog.appendChild(productCard);
//     });
// }

// // Function to create a product card
// function createProductCard(product) {
//     const productCard = document.createElement('div');
//     productCard.classList.add('product_card');

//     // Create the product image container
//     const productcardContainer = document.createElement('div');
//     productcardContainer.classList.add('productcard_container');

//     // Create the favorite icon
//     const favoriteIcon = document.createElement('div');
//     favoriteIcon.classList.add('fav_icon');
//     favoriteIcon.setAttribute('data-tooltip', 'add to wishlist');
//     favoriteIcon.innerHTML = '<span class="material-symbols-outlined">favorite</span>';
//     productcardContainer.appendChild(favoriteIcon);

//     // Create the product image
//     const productImage  = document.createElement('div');
//     productImage.classList.add('pimg');
//     const img = document.createElement('img');
//     img.src = product.productImage[0]; // Use the first image URL
//     img.alt = product.productName;
//     productImage.appendChild(img);
//     productcardContainer.appendChild(productImage);

//     productCard.appendChild(productcardContainer);

//     // Create the product description
//     const productDescription = document.createElement('div');
//     productDescription.classList.add('product_des');

//     const productName = document.createElement('div');
//     productName.classList.add('product_name');
//     productName.textContent = product.productName;
//     productDescription.appendChild(productName);

//     const productPrice = document.createElement('div');
//     productPrice.classList.add('product_price');
//     productPrice.textContent = `${product.price}`;
//     productDescription.appendChild(productPrice);

//     productCard.appendChild(productDescription);

//     return productCard;
// }

// // Call the fetchProducts function to load products
// fetchProducts();



// Function to fetch and display products for the "sec_img" section
async function fetchProductsForSecImg() {
    try {
        const response = await fetch('https://new-plant-json-server.onrender.com/products');
        const products = await response.json();

        // Get the sorting dropdown element
        const selectElementForSecImg = document.getElementById('sorting');
        const selectedOption = selectElementForSecImg.value;

        // Sort the products based on the selected option
        products.sort((a, b) => {
            if (selectedOption === 'atoz') {
                return a.productName.localeCompare(b.productName);
            } else if (selectedOption === 'ztoa') {
                return b.productName.localeCompare(a.productName);
            } else if (selectedOption === 'lowtohigh') {
                return a.price - b.price;
            } else if (selectedOption === 'hightolow') {
                return b.price - a.price;
            } else {
                return 0; // No sorting
            }
        });

        displayProductsForSecImg(products);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to display products for the "sec_img" section
function displayProductsForSecImg(products) {
    const productCatalog = document.querySelector('.sec_img .product_catalog');

    // Clear existing product cards
    while (productCatalog.firstChild) {
        productCatalog.removeChild(productCatalog.firstChild);
    }

    products.forEach(product => {
        const productCard = createProductCard(product);
        productCatalog.appendChild(productCard);
    });
}

// Function to create a product card
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product_card');

    // Create the product image container
    const productCardContainer = document.createElement('div');
    productCardContainer.classList.add('productcard_container');

    // Create the favorite icon
    const favoriteIcon = document.createElement('div');
    favoriteIcon.classList.add('fav_icon');
    favoriteIcon.setAttribute('data-tooltip', 'add to wishlist');
    favoriteIcon.innerHTML = '<span class="material-symbols-outlined">favorite</span>';
    productCardContainer.appendChild(favoriteIcon);

    // Create the product image
    const productImage = document.createElement('div');
    productImage.classList.add('pimg');
    const img = document.createElement('img');
    img.src = product.productImage[0]; // Use the first image URL
    img.alt = product.productName;
    productImage.appendChild(img);
    productCardContainer.appendChild(productImage);

    productCard.appendChild(productCardContainer);

    // Create the product description
    const productDescription = document.createElement('p');
    productDescription.classList.add('product_des');
    productDescription.innerHTML = `${product.productName}<br>${product.price}`;
    productCard.appendChild(productDescription);

    return productCard;
}

// Call the fetchProductsForSecImg function to load products for the "sec_img" section
fetchProductsForSecImg();

// Listen for changes to the sorting dropdown
const selectElementForSecImg = document.getElementById('sorting');
selectElementForSecImg.addEventListener('change', fetchProductsForSecImg);



