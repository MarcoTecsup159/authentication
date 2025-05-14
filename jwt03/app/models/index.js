//ORM para interactuar con la base de datos
import Sequelize from "sequelize";

import dbConfig from "../config/db.config.js";

import userModel from "./user.model.js";
import roleModel from "./role.model.js";

//Instancia de Sequelize con parametros de configuacion
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
    port: dbConfig.PORT,
});

//Objeto para almacenar los modelos y la instancia de Sequelize
const db = {};

//Asignamos Sequelize y la instancia sequelize al objeto db
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Inicializamos los modelos de usuario y rol
db.user = userModel(sequelize, Sequelize);
db.role = roleModel(sequelize, Sequelize);

//Definimos relacion de muchos a muchos entre roles y usuarios
db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId",
});

//Definimos relacion inversa de muchos a muchos entre usuario y roles
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId",
    as: "roles",
});

//constante con los posibles roles que se pueden asignar
db.ROLES = ["user", "admin", "moderador"];

//exportamos el objeto db para poder ser usado en otras partes de la aplicación
export default db;