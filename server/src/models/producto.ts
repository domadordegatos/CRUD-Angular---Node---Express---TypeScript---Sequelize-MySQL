import db from '../db/connections';
import {DataTypes} from 'sequelize'

const Producto = db.define('Producto', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    createdAt: false,
    updatedAt: false,
});
export default Producto;