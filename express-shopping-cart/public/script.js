async function loadCart() {
    const response = await fetch('/cart');
    const cartData = await response.json();
    console.log("Current Cart:", cartData);
}

async function addToCart(itemName) {
    await fetch('/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item: itemName })
    });
    loadCart();
}

async function clearCart() {
    await fetch('/cart/clear', { method: 'POST' });
    loadCart();
}

window.onload = loadCart;