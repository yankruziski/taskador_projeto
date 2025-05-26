// routes/categorieRoutes.js
const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categorieController');

router.get('/categories', categorieController.getAllCategories);
router.get('/categories/:id', categorieController.getCategoryById);
router.post('/categories', categorieController.createCategory);
router.put('/categories/:id', categorieController.updateCategory);
router.delete('/categories/:id', categorieController.deleteCategory);

module.exports = router;
