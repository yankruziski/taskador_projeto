// services/taskService.js
const pool = require('../config/database');

// Criar nova tarefa
const createTask = async ({ name_task, description_task, start_date, finish_date, user_id, categorie_id }) => {
  const query = `
    INSERT INTO task (name_task, description_task, start_date, finish_date, user_id, categorie_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const values = [name_task, description_task, start_date, finish_date, user_id, categorie_id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Listar todas as tarefas
const getAllTasks = async () => {
  const result = await pool.query('SELECT * FROM task');
  return result.rows;
};

// Atualizar uma tarefa
const updateTask = async (id, { name_task, description_task, start_date, finish_date }) => {
  const query = `
    UPDATE task
    SET name_task = $1, description_task = $2, start_date = $3, finish_date = $4
    WHERE id = $5
    RETURNING *;
  `;
  const values = [name_task, description_task, start_date, finish_date, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Deletar tarefa
const deleteTask = async (id) => {
  const result = await pool.query('DELETE FROM task WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
