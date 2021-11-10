import pool from '../database.js';

export default async function insertProduct(productData) {
  const { name, price, categoryId, image, stock } = productData;

  const result = await pool.query(
    'INSERT INTO products (name, price, category_id, image, stock) VALUES ($1, $2, $3, $4, $5) RETURNING id',

    [name, price, categoryId, image, stock],
  );

  return result.rows[0].id;
}
