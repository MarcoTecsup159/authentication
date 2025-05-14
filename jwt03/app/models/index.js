// ORM para interactuar con la base de datos
import Sequelize from "sequelize";
import dbConfig from "../config/db.config.js";
import userModel from "./user.model.js";
import roleModel from "./role.model.js";

// Objeto para almacenar los modelos y la instancia de Sequelize
const db = {};

// Verificamos si debemos usar la base de datos
const useDatabase = process.env.USE_DATABASE === 'true';

if (useDatabase) {
    // Instancia de Sequelize con parámetros de configuración
    const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: dbConfig.pool,
        port: dbConfig.PORT,
    });

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    // Inicializamos los modelos de usuario y rol
    db.user = userModel(sequelize, Sequelize);
    db.role = roleModel(sequelize, Sequelize);

    // Definimos relaciones
    db.role.belongsToMany(db.user, {
        through: "user_roles",
        foreignKey: "roleId",
        otherKey: "userId",
    });

    db.user.belongsToMany(db.role, {
        through: "user_roles",
        foreignKey: "userId",
        otherKey: "roleId",
        as: "roles",
    });

    // Constante con los posibles roles
    db.ROLES = ["user", "admin", "moderador"];
    
    console.log('✅ Modo con base de datos activado');
} else {
    console.log('⚠️ Modo sin base de datos activado. No se inicializarán modelos ni conexión.');
    db.ROLES = ["user", "admin", "moderador"];
}

export default db;
