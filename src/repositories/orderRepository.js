import format from 'pg-format';
import pool from '../database.js';

async function create(clientId, addressId, paymentId, products) {
  const productValues = [];

  const orderId = (
    await pool.query(
      'INSERT INTO orders (client_id, address_id, payment_id) VALUES ($1, $2, $3) RETURNING id',
      [clientId, addressId, paymentId],
    )
  ).rows[0].id;

  products.forEach((product) => {
    const productValue = [product.id, orderId, product.amount];
    productValues.push(productValue);
  });

  await pool.query(
    format(
      'INSERT INTO order_product (product_id, order_id, amount) VALUES %L;',
      productValues,
    ),
    [],
  );

  return orderId;
}

export { create };
