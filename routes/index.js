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

// Tela de login
router.get('/login', (req, res) => {
  res.render('pages/page2', { pageTitle: 'Login' });
});

// Recebe login
router.post('/login', (req, res) => {
  const { username } = req.body;
  if (username) {
    req.session = req.session || {};
    req.session.username = username;
    res.redirect('/tasks');
  } else {
    res.redirect('/login');
  }
});

// Middleware para proteger as rotas
router.use((req, res, next) => {
  if (req.session && req.session.username) {
    next();
  } else {
    res.redirect('/login');
  }
});

// Sua rota protegida
router.get('/tasks', (req, res) => {
  res.render('pages/page1', { pageTitle: 'Tarefas', username: req.session.username });
});

// Rota sobre
router.get('/login', (req, res) => {
  res.render('pages/login', { pageTitle: 'login' });
});

module.exports = router;
