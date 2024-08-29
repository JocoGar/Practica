const express = require('express');
const router = express.Router();
const departamentoController = require('../controllers/depto.controller.js');

router.post('/api/departamentos/create', departamentoController.create);
router.get('/api/departamentos/all', departamentoController.retrieveAllDepartamentos);
router.get('/api/departamentos/onebyid/:id', departamentoController.getDepartamentoById);
router.put('/api/departamentos/update/:id', departamentoController.updateById);
router.delete('/api/departamentos/delete/:id', departamentoController.deleteById);

module.exports = router;
