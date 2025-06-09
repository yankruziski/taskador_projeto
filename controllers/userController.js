// services/userService.js
const pool = require('../config/database');
const User = require("../models/userModel")


const getAllUsers = async (req, res) => {
  const users = await User.getAll()
  return res.status(200).json(users)
};

const getUserById = async (req, res) => {
  const users = await User.getById()
  return res.status(200).json(users)
};

const createUser = async (req, res) => {
  const {name} = req.body

  if (!name) {
    return res.status(400).send("Bad request")
  }

  const newUser = await User.create({
    nome: name,
  })
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