const wishlistContainer =
document.getElementById("wishlistContainer");

let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];

wishlist.forEach(item=>{

    wishlistContainer.innerHTML += `

    <div class="product-card">

        <img src="${item.image}">

        <h3>${item.name}</h3>

        <p>₹${item.price}</p>

    </div>

    `;

});
