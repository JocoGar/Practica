const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedor.controller.js');

router.post('/api/proveedores/create', proveedorController.create);
router.get('/api/proveedores/all', proveedorController.retrieveAllProveedores);
router.get('/api/proveedores/onebyid/:id', proveedorController.getProveedorById);
router.put('/api/proveedores/update/:id', proveedorController.updateById);
router.delete('/api/proveedores/delete/:id', proveedorController.deleteById);

module.exports = router;
