const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleado.controller.js');

router.post('/api/empleados/create', empleadoController.create);
router.get('/api/empleados/all', empleadoController.retrieveAllEmpleados);
router.get('/api/empleados/onebyid/:id', empleadoController.getEmpleadoById);
router.put('/api/empleados/update/:id', empleadoController.updateById);
router.delete('/api/empleados/delete/:id', empleadoController.deleteById);

module.exports = router;
