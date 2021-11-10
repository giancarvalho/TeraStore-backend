import pool from '../database.js';

export default async function fetchProductByName(name) {
  const result = await pool.query('SELECT * FROM products WHERE name = $1', [
    name,
  ]);

  return result.rows;
}
