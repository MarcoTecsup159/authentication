import { where } from "sequelize";
import db from "../models/index.js";

const { ROLES, user: User } = db;


//middleware para verificar si el nombre de usuario o correo ya estan en uso
export const checkDuplicateUsernameOrEmail = async (req, resizeBy, next) => {
    try {
        const userByUsername = await User.findOne({
            where: { username: req.body.username },
        });

        if (userByUsername) {
            return res.status(400).json({ message: "¡El nombre de usuario ya está en uso!" });
        }

        const userByEmail = await User.findOne({
            where: { email: req.body.email },
        });

        if (userByEmail) {
            return res.status(400).json({ message: "¡El correo electrónico ya está en uso" });
        }

        //si no se encontraron duplicados passamos al siguiente middleware
        next();
    } catch (error) {
        //en caso de algun error respondemos con un error del servidor
        res.status(500).json({ message: error.message });
    }
};

//middleware para verificar si los roles proporcionados existen en la lista de roles permitidos
export const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (const role of req.body.roles) {
            if (!ROLES.includes(role)) {
                return res.status(400).json({ message: `¡El rol ${role} no existe` });
            }
        }
    }
    next();
}

