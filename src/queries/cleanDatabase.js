import pool from '../database';

export default async function cleanDatabase() {
  await pool.query('DELETE FROM order_product');
  await pool.query('DELETE FROM orders');
  await pool.query('DELETE FROM address');
  await pool.query('DELETE FROM sessions');
  await pool.query('DELETE FROM clients');
  await pool.query('DELETE FROM products;');
  await pool.query('DELETE FROM categories;');
}
