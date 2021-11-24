import pool from '../database.js';

async function find(value) {
  const filter = Number(value) ? 'id' : 'name';

  const result = await pool.query(
    `SELECT * FROM categories WHERE ${filter} = $1`,
    [value],
  );

  return result.rows;
}

async function create(name) {
  const result = await pool.query(
    'INSERT INTO categories (name) VALUES ($1) RETURNING id',
    [name],
  );

  return result.rows[0].id;
}

export { create, find };
