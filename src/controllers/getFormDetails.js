import pool from '../database.js';

export default async function getFormDetails(req, res) {
  try {
    const states = (await pool.query('SELECT * FROM states ORDER BY id asc;'))
      .rows;

    const paymentTypes = (await pool.query('SELECT * FROM payment_types;'))
      .rows;

    res.send({ states, paymentTypes });
  } catch (error) {
    res.sendStatus(500);
  }
}
