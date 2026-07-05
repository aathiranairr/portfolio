const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const product = products.find(p => p.id === id);

let currentImage = 0;



const image = document.getElementById("productImage");

image.src = product.images[currentImage];

document.getElementById("productName").textContent =
product.name;

document.getElementById("productPrice").textContent =
"₹" + product.price;

document.getElementById("productDescription").textContent =
product.description;

document.getElementById("productStock").textContent =
"Stock: " + product.stock;

document.getElementById("next").onclick = function(){

    currentImage++;

    if(currentImage >= product.images.length)
        currentImage = 0;

    image.src = product.images[currentImage];

}

document.getElementById("prev").onclick = function(){

    currentImage--;

    if(currentImage < 0)
        currentImage = product.images.length-1;

    image.src = product.images[currentImage];

}


let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("addCartBtn").addEventListener("click", () => {

    const existing = cart.find(item => item.id === product.id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

});

const addCartBtn = document.getElementById("addCartBtn");

addCartBtn.addEventListener("click", function () {

    // Your existing add-to-cart code here

    addCartBtn.textContent = "✓ Added";
    addCartBtn.style.background = "#2E7D32";

    setTimeout(() => {
        addCartBtn.textContent = "Add to Cart";
        addCartBtn.style.background = "#C56C86";
    }, 1200);

});