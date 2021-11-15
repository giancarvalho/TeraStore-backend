import pool from '../database.js';

export default async function updateProduct(productId, productKey, newValue) {
  const basicQuery = `UPDATE products SET ${productKey} = $1 WHERE id = $2 RETURNING ${productKey}`;

  const result = await pool.query(basicQuery, [newValue, productId]);

  return result.rows[0].stock;
}
