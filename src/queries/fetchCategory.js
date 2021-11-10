import pool from '../database.js';

export default async function fetchCategory(id) {
  const result = await pool.query('SELECT * FROM categories WHERE id = $1', [
    id,
  ]);

  return result.rows;
}
