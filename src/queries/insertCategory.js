import pool from '../database.js';

export default async function insertCategory(name) {
  const result = await pool.query(
    'INSERT INTO categories (name) VALUES ($1) RETURNING id',
    [name],
  );

  return result.rows[0].id;
}
