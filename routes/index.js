// routes/index.js
const express = require('express');
const router = express.Router();

const categorieRoutes = require('./categorieRoutes');
const tasksRouter = require("./taskRoutes");
const usersRouter = require("./userRoutes")

// Rotas de categorias
router.use('/categories', categorieRoutes);

// rotas de tarefas
router.use("/tasks", tasksRouter);

// rotas dos usuarios
router.use("/users", usersRouter);


module.exports = router;
