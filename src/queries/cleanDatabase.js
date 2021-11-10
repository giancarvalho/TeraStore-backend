import pool from '../database';

export default async function cleanDatabase() {
  await pool.query('DELETE FROM products;');

  await pool.query('DELETE FROM categories;');
}
