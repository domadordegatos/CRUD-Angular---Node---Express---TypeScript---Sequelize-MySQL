import { Sequelize } from "sequelize";

const sequelize = new Sequelize('almacen', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false 
    /* ejecuta una consulta al conectarse a la base de datos */
  });

  export default sequelize;