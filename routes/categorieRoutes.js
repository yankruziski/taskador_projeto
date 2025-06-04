// routes/categorieRoutes.js
const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categorieController');

router.get('/', categorieController.getAllCategories);
router.get('/:id', categorieController.getCategoryById);
router.post('/', categorieController.createCategory);
router.put('/:id', categorieController.updateCategory);
router.delete('/:id', categorieController.deleteCategory);

module.exports = router;
