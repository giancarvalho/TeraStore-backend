import pool from '../database.js';

export default async function insertOrder(clientId, addressId, paymentId) {
  const orderId = (
    await pool.query(
      'INSERT INTO orders (client_id, address_id, payment_id) VALUES ($1, $2, $3) RETURNING id',
      [clientId, addressId, paymentId],
    )
  ).rows[0].id;

  return orderId;
}
