const express = require('express');
const router = express.Router();

// Ruta para mostrar el carrito del usuario
router.get('/', (req, res) => {
  res.render('cart/view', { 
    title: 'Mi Carrito',
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:9090/api'
  });
});

module.exports = router;
