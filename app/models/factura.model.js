module.exports = (sequelize, Sequelize) => {

    const Factura = sequelize.define("factura", {
        id_fact: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        no_fact: {
            type: Sequelize.INTEGER
        },
        serie: {
            type: Sequelize.INTEGER
        },
        id_cliente: {
            type: Sequelize.INTEGER,
        },
        id_empleado: {
            type: Sequelize.INTEGER,
        },
        fecha_fac: {
            type: Sequelize.DATE
        }
    });
    return Factura;
};