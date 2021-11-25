import pool from '../database.js';

async function getStates() {
  const result = await pool.query('SELECT * FROM states ORDER BY id asc;');

  return result.rows;
}

async function getPaymentTypes() {
  const result = await pool.query('SELECT * FROM payment_types;');

  return result.rows;
}

export { getStates, getPaymentTypes };
