const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

function displayProducts(productList){

    productContainer.innerHTML="";

    productList.forEach(product=>{

        productContainer.innerHTML += `

        <div class="product-card"
        onclick="openProduct(${product.id})">

            <img src="${product.images[0]}">

            <h3>${product.name}</h3>

            <h4>₹${product.price}</h4>

            <button id="addCartBtn" onclick="event.stopPropagation(); addToCart(${product.id})">
                Add to Cart
            </button>

        </div>

        `;

    });

}

displayProducts(products);

searchInput.addEventListener("keyup", ()=>{

const value = searchInput.value.toLowerCase();

const filtered = products.filter(product=>{

return product.name.toLowerCase().includes(value);

});

displayProducts(filtered);

});

function addToCart(id) {

    const product = products.find(p => p.id === id);

    const existing = cart.find(item => item.id === id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

}
function openProduct(id){

    window.location.href = `product.html?id=${id}`;
    
    }

function updateCartCount() {

    let total = 0;
    
    cart.forEach(item => {
            total += item.quantity;
        });
    
    document.getElementById("cartCount").textContent = total;
    
}

function increaseQuantity(index){

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();

}

function decreaseQuantity(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();

}

function addToWishlist(id){

    let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

    const product =
    products.find(p=>p.id===id);

    const exists =
    wishlist.find(item=>item.id===id);

    if(!exists){

        wishlist.push(product);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

        alert("Added to wishlist");

    }

}



