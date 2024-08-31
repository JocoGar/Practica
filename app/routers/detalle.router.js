const express = require('express');
const router = express.Router();
const detalleController = require('../controllers/detalle.controller.js');


router.post('/api/detalles/create', detalleController.create);

// Obtener todos los detalles
router.get('/api/detalles/all', detalleController.retrieveAllDetalles);

// Obtener un detalle por ID
router.get('/api/detalles/onebyid/:id', detalleController.getDetalleById);

// Actualizar un detalle por ID
router.put('/api/detalles/update/:id', detalleController.updateById);

// Eliminar un detalle por ID
router.delete('/api/detalles/delete/:id', detalleController.deleteById);

module.exports = router;
