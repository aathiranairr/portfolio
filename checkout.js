const cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(item => {
    total += item.price * item.quantity;
});

document.getElementById("checkoutTotal").textContent =
"Total : ₹" + total;

function sendWhatsAppOrder() {

    const name =
    document.getElementById("customerName").value.trim();

    const phone =
    document.getElementById("customerPhone").value.trim();

    const email =
    document.getElementById("customerEmail").value.trim();

    const address =
    document.getElementById("customerAddress").value.trim();

    if(name==="" || phone==="" || address===""){

        alert("Please fill all required fields.");

        return;
    }

    let orderMessage =
`🛍 *NEW ORDER - JOURNAL HAVEN*

👤 Name: ${name}

📞 Phone: ${phone}

📧 Email: ${email || "Not Provided"}

📍 Address:
${address}

--------------------------

🛒 *Items Ordered*

`;

    cart.forEach(item=>{

        orderMessage +=
`• ${item.name}
Qty: ${item.quantity}
Price: ₹${item.price}

`;

    });

    orderMessage +=
`--------------------------

💰 Total Amount: ₹${total}

Thank you!
`;

    const businessNumber = "918807676886";

    const whatsappURL =
`https://wa.me/${businessNumber}?text=${encodeURIComponent(orderMessage)}`;

    window.open(whatsappURL,"_blank");
}