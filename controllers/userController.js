// services/userService.js
const pool = require('../config/database');

const getAllUsers = async () => {
  const res = await pool.query('SELECT * FROM "user"');
  return res.rows;
};

const getUserById = async (id) => {
  const res = await pool.query('SELECT * FROM "user" WHERE id = $1', [id]);
  return res.rows[0];
};

const createUser = async (name_user) => {
  const res = await pool.query(
    'INSERT INTO "user" (name_user) VALUES ($1) RETURNING *',
    [name_user]
  );
  return res.rows[0];
};

const updateUser = async (id, name_user) => {
  const res = await pool.query(
    'UPDATE "user" SET name_user = $1 WHERE id = $2 RETURNING *',
    [name_user, id]
  );
  return res.rows[0];
};

const deleteUser = async (id) => {
  const res = await pool.query('DELETE FROM "user" WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};