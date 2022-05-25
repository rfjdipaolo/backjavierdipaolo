const express = require('express');
const router = express.Router(); 
const { vistaCliente, crearCliente, editarCliente, deleteCliente} = require('../controller/controller.js');
const {check ,validationResult , body } = require("express-validator");


/* rutas */
router.post('/crear', check("name").not().isEmpty().withMessage("este campo no puede estar vacio" ),  crearCliente );

router.get('/ver', vistaCliente);

router.put('/editar/:id' , editarCliente);
router.delete('/borrar/:id', deleteCliente);






module.exports = router;





