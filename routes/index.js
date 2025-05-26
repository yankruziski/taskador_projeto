// routes/index.js
const express = require('express');
const router = express.Router();

const TarefaController = require('../controllers/taskController');
const userController = require('../controllers/userController');
const categorieRoutes = require('./categorieRoutes');

// Rotas de tarefas
router.post('/tarefas', TarefaController.criarTarefa);
router.get('/tarefas', TarefaController.listarTarefas);
router.put('/tarefas/:id', TarefaController.editarTarefa);
router.delete('/tarefas/:id', TarefaController.excluirTarefa);

// Rotas de usuários
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Rotas de categorias
router.use('/', categorieRoutes);

module.exports = router;
