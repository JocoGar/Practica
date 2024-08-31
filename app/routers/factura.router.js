const express = require('express');
const router = express.Router();
const facturaController = require('../controllers/factura.controller.js');

router.post('/api/facturas/create', facturaController.create);
router.get('/api/facturas/all', facturaController.retrieveAllFacturas);
router.get('/api/facturas/onebyid/:id', facturaController.getFacturaById);
router.put('/api/facturas/update/:id', facturaController.updateById);
router.delete('/api/facturas/delete/:id', facturaController.deleteById);

module.exports = router;
