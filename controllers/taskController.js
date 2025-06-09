// controllers/TarefaController.js
const pool = require('../config/database');

// Criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
  const { name_tasks, description_task, start_date, finish_date, user_id, categorie_id } = req.body;

  try {
    const query = 'INSERT INTO task (name_tasks, description_task, start_date, finish_date, user_id, categorie_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [name_tasks, description_task, start_date, finish_date, user_id, categorie_id];
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
  const query = `
    SELECT 
      task.*, 
      categorie.name_categorie 
    FROM task
    LEFT JOIN categorie ON task.categorie_id = categorie.id
  `;

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar uma tarefa
exports.editarTarefa = async (req, res) => {
  const { id } = req.params;
  const { name_tasks, description_task, finish_date } = req.body;

  try {
    const query = 'UPDATE task SET name_tasks = $1, description_task = $2, finish_date = $3 WHERE id = $4 RETURNING *';
    const values = [name_tasks, description_task, finish_date, id];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao editar tarefa' });
  }
};

// Excluir uma tarefa
exports.excluirTarefa = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM task WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};