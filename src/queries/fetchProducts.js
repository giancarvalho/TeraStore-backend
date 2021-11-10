import pool from '../database.js';

export default async function fetchProducts(id) {
  const basicQuery = 'SELECT * FROM products';
  const filter = ' WHERE id = $1';
  let result;

  if (id) {
    result = await pool.query(basicQuery + filter, [id]);
  } else {
    result = await pool.query(`${basicQuery} ORDER BY id DESC LIMIT 30;`);
  }

  return result.rows;
}
