import pool from '../database.js';

export default async function createToken(id, token) {
  await pool.query('INSERT INTO sessions (client_id, token) VALUES ($1, $2)', [
    id,
    token,
  ]);
}
