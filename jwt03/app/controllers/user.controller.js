import db from "../models/index.js";

// Controlador público (sin cambios)
export const allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

// Para los demás, opcionalmente podrías verificar si la base de datos está activa
export const userBoard = (req, res) => {
  if (!db.user) {
    return res.status(503).send("Modo sin base de datos: contenido limitado para usuarios.");
  }
  res.status(200).send("User Content.");
};

export const adminBoard = (req, res) => {
  if (!db.user) {
    return res.status(503).send("Modo sin base de datos: contenido limitado para administradores.");
  }
  res.status(200).send("Admin Content.");
};

export const moderatorBoard = (req, res) => {
  if (!db.user) {
    return res.status(503).send("Modo sin base de datos: contenido limitado para moderadores.");
  }
  res.status(200).send("Moderator Content.");
};
