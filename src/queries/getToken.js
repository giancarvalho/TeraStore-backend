import pool from '../database.js';

export default async function getTokenData(query) {
  const filter = Number(query) ? 'client_id' : 'session';

  const result = await pool.query(
    `SELECT * FROM sessions WHERE ${filter} = $1;`,
    [query],
  );

  return result;
}
