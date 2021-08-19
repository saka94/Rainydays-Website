const detailContainer = document.querySelector(".product-details");

const title = document.querySelector("title")

const quaryString = document.location.search;

const params = new URLSearchParams(quaryString);

const id = params.get("id");

console.log(id);


const url = "http://kalmer.one/rainy-days/wp-json/wc/store/products/" + id;

console.log(url);

async function fetchDetails() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);

    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
}

fetchDetails();

function createHtml(details) {
    detailContainer.innerHTML += ` <div class="details-card">
                                    <h2 class="h2-style">${details.name}</h2>
                                    <img class="" src="${details.images[0].thumbnail}">
                                    <p class="price"> Price: ${details.prices.currency_symbol}${details.prices.price}</p>
                                  </div>
                                  <p class="lorem-ipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim tellus, vehicula vitae varius id,
                                  facilisis eu lorem. Suspendisse non metus volutpat, scelerisque lorem et, ultricies enim. Proin semper tortor
                                  tellus, id iaculis erat laoreet quis. Nam luctus orci metus, nec consectetur ante accumsan vitae. In ultrices
                                  lorem ligula, eget vehicula augue suscipit sed. Nam semper quam sit amet feugiat tempus. Mauris sagittis
                                  sagittis purus, eu sodales lacus luctus in. Fusce maximus nunc sapien, eu congue arcu tincidunt a. Cras ac
                                  lorem dui. Suspendisse varius dolor id sodales ullamcorper. Cras rutrum tellus erat, id mollis nunc malesuada
                                  eu. Donec et mi a metus rhoncus bibendum ac ut diam. Vestibulum rutrum fermentum pharetra. Etiam mattis
                                  dapibus quam vitae gravida. </p>
                                  <div class="Size-Chooser">
                                  <button class="size-dropdown">Choose size</button>
                                  <div class="size-content">
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                    <option value="XLarge">XLarge</option>
                                    <option value="XXLarge">XXLarge</option>
                                  </div>
                                </div>
                                <a href="checkout.html" class="add-to-cart big-cta cta-margin"> Add To Cart</a>`
    
    document.title = `${details.name}`                     
}
