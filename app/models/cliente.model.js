module.exports = (sequelize, Sequelize) => {

    const Cliente = sequelize.define("cliente", {
        id_cliente: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        apellido: {
            type: Sequelize.STRING
        },
        razon_social: {
            type: Sequelize.STRING
        },
        
        nit: {
            type: Sequelize.STRING
        },
        direccion:{
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.FLOAT
        },
        email:{
            type: Sequelize.INTEGER
        },
        fecha_ingreso:{
            type: Sequelize.DATE
        },
        estatus:{
            type: Sequelize.INTEGER
        }
    });
    return Cliente;
};