const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];
    res.json(cart);
});

router.post('/add', (req, res) => {
    const { item } = req.body;
    let cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];
    
    cart.push(item);
    
    res.cookie('cart', JSON.stringify(cart), { maxAge: 86400000, httpOnly: true });
    res.json({ message: "Item added", cart });
});

router.post('/clear', (req, res) => {
    res.clearCookie('cart');
    res.json({ message: "Cart cleared" });
});

module.exports = router;