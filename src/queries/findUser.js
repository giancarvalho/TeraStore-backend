import pool from '../database.js';

export default async function findUser(email) {
  const result = await pool.query(
    `SELECT * FROM clients WHERE email = $1;
`,
    [email],
  );

  return result;
}
