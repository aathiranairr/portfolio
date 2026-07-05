const cartItems = document.getElementById("cartItems");
const grandTotal = document.getElementById("grandTotal");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<h2 style='text-align:center;'>Your cart is empty.</h2>";
        grandTotal.textContent = "";
        return;
    }

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.images[0]}" class="cart-image">

            <div class="cart-details">

                <h3>${item.name}</h3>

                <p>Price : ₹${item.price}</p>

                <p>Total : ₹${item.price * item.quantity}</p>

            </div>

            <div class="cart-actions">

                <div class="quantity-box">

                    <button onclick="decreaseQuantity(${index})">−</button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseQuantity(${index})">+</button>

                </div>

                <button class="remove-btn" onclick="removeItem(${index})">

                    Remove

                </button>

            </div>

        </div>

        `;
    });

    grandTotal.textContent = "Grand Total : ₹" + total;
}

function increaseQuantity(index) {

    cart[index].quantity++;

    saveCart();
}

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    saveCart();
}

function removeItem(index) {

    cart.splice(index, 1);

    saveCart();
}

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

function goToCheckout() {

    if(cart.length===0){

        alert("Your cart is empty!");

        return;

    }

    window.location.href="checkout.html";
}

displayCart();