import pool from '../database.js';

export default async function getProductsByCategory(req, res) {
  const { categoryId } = req.query;

  try {
    const categoryName = await pool.query(
      'SELECT name FROM categories WHERE id = $1',
      [categoryId],
    );

    const products = await pool.query(
      'SELECT * FROM products WHERE category_id = $1',
      [categoryId],
    );
    const result = { name: categoryName.rows[0].name, products: products.rows };

    res.send(result);
  } catch (error) {
    res.sendStatus(500);
  }
}
