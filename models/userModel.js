const db = require('../config/database');

class User {
  static async getAll() {
    const result = await db.query('SELECT * FROM users');
    return result.rows;
  }

  static async getById() {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO users (name) VALUES ($1) RETURNING *',
      [data.name]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      'UPDATE users SET name = $1, WHERE id = $3 RETURNING *',
      [data.name, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = User;
