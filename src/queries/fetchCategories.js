import pool from '../database.js';

export default async function fetchCategories() {
  const result = await pool.query('SELECT * FROM categories;');

  return result.rows;
}
