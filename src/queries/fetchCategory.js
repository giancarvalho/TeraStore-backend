import pool from '../database.js';

export default async function fetchCategory(value) {
  const filter = Number(value) ? 'id' : 'name';

  const result = await pool.query(
    `SELECT * FROM categories WHERE ${filter} = $1`,
    [value],
  );

  return result.rows;
}
