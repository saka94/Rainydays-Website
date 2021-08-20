const productContainer = document.querySelector(".Product-container")

const url = "http://kalmer.one/rainy-days/wp-json/wc/store/products?per_page=100";

const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + url;

async function fetchProducts() {
    
    try {
        const response = await fetch(corsEnabledUrl)

        const results = await response.json();

        console.log(results);

        productContainer.innerHTML = "";

        const details = results;

        details.forEach(function(product){

          if (product.categories[0].slug === "women"){
            productContainer.innerHTML += `<a href="../product.html?id=${product.id}" class="products">
                                         <img class="product-picture" src="${product.images[0].thumbnail}">
                                         <p class="name">${product.name}</p>
                                         <p class="price"> Price: ${product.prices.currency_symbol}${product.prices.price}</p>
                                        </a>`;
                                                                
        }});

    }
    catch (error) {
        console.log(error);
        productContainer.innerHTML = message("error", error);
    }
}

fetchProducts();