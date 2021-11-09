import pool from '../database.js';

async function insertProducts(productData) {
  const { name, price, categoryId, image, stock } = productData;

  const result = await pool.query(
    'INSERT INTO products (name, price, category_id, image, stock) VALUES ($1, $2, $3, $4, $5) RETURNING id',

    [name, price, categoryId, image, stock],
  );

  return result.rows[0].id;
}

async function fetchProducts(id) {
  const basicQuery = 'SELECT * FROM products';
  const filter = ' WHERE id = $1';
  let result;

  if (id) {
    result = await pool.query(basicQuery + filter, [id]);
  } else {
    result = await pool.query(basicQuery);
  }

  return result.rows;
}

export { insertProducts, fetchProducts };
