const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controller.js');

router.post('/api/productos/create', productoController.create);
router.get('/api/productos/all', productoController.retrieveAllProductos);
router.get('/api/productos/onebyid/:id', productoController.getProductoById);
router.put('/api/productos/update/:id', productoController.updateById);
router.delete('/api/productos/delete/:id', productoController.deleteById);

module.exports = router;
