const db = require('../config/database');

class Categorie {
  static async getAll() {
    const result = await Categorie.query('SELECT * FROM categories');
    return result.rows;
  }

  static async getById() {
    const result = await db.query('SELECT * FROM categpries WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO categories (name) VALUES ($1) RETURNING *',
      [data.name]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      'UPDATE categories SET name = $1, WHERE id = $3 RETURNING *',
      [data.name, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM categories WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Categorie;
