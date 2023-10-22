// Function to fetch and display products
async function fetchProducts() {
    try {
        const response = await fetch('https://new-plant-json-server.onrender.com/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to display products
function displayProducts(products) {
    const productCatalog = document.querySelector('.product_catalog');

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
    const productcardContainer = document.createElement('div');
    productcardContainer.classList.add('productcard_container');

    // Create the favorite icon
    const favoriteIcon = document.createElement('div');
    favoriteIcon.classList.add('fav_icon');
    favoriteIcon.setAttribute('data-tooltip', 'add to wishlist');
    favoriteIcon.innerHTML = '<span class="material-symbols-outlined">favorite</span>';
    productcardContainer.appendChild(favoriteIcon);

    // Create the product image
    const productImage = document.createElement('div');
    productImage.classList.add('pimg');
    const img = document.createElement('img');
    img.src = product.productImage[0]; // Use the first image URL
    img.alt = product.productName;
    productImage.appendChild(img);
    productcardContainer.appendChild(productImage);

    productCard.appendChild(productcardContainer);

    // Create the product description
    const productDescription = document.createElement('div');
    productDescription.classList.add('product_des');

    const productName = document.createElement('div');
    productName.classList.add('product_name');
    productName.textContent = product.productName;
    productDescription.appendChild(productName);

    const productPrice = document.createElement('div');
    productPrice.classList.add('product_price');
    productPrice.textContent = `$${product.price}`;
    productDescription.appendChild(productPrice);

    productCard.appendChild(productDescription);

    return productCard;
}

// Call the fetchProducts function to load products
fetchProducts();








