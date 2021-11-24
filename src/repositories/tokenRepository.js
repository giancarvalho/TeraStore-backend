import pool from '../database.js';

async function find(query) {
  const filter = Number(query) ? 'client_id' : 'token';

  const result = await pool.query(
    `SELECT * FROM sessions WHERE ${filter} = $1;`,
    [query],
  );

  return result;
}

async function create(id, token) {
  return pool.query('INSERT INTO sessions (client_id, token) VALUES ($1, $2)', [
    id,
    token,
  ]);
}

export { create, find };
