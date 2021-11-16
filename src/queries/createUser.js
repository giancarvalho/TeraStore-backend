import bcrypt from 'bcrypt';
import pool from '../database.js';

export default async function createUser(user) {
  const userHash = bcrypt.hashSync(user.password, 10);

  const { id } = (
    await pool.query(
      'INSERT INTO clients (name, cpf, email, password) VALUES ($1, $2, $3, $4) RETURNING id;',
      [user.name, user.cpf, user.email, userHash],
    )
  ).rows[0];

  return id;
}
