// services/categorieService.js
const pool = require('../config/database');

const getAllCategories = async () => {
  const result = await pool.query('SELECT * FROM categorie');
  return result.rows;
};

const getCategoryById = async (id) => {
  const result = await pool.query('SELECT * FROM categorie WHERE id = $1', [id]);
  return result.rows[0];
};

const createCategory = async (name_category) => {
  const result = await pool.query(
    'INSERT INTO categorie (name_category) VALUES ($1) RETURNING *',
    [name_category]
  );
  return result.rows[0];
};

const updateCategory = async (id, name_category) => {
  const result = await pool.query(
    'UPDATE categorie SET name_category = $1 WHERE id = $2 RETURNING *',
    [name_category, id]
  );
  return result.rows[0];
};

const deleteCategory = async (id) => {
  const result = await pool.query('DELETE FROM categorie WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};