import pool from '../database.js';

export default async function fetchProducts(productsList) {
  const basicQuery = 'SELECT * FROM products';
  let idPool = '';
  let result;

  if (productsList) {
    productsList.forEach((product, index) => {
      if (index === productsList.length - 1) {
        idPool += `$${index + 1}`;
      } else {
        idPool += `$${index + 1}, `;
      }
    });
    const filter = ` WHERE id in (${idPool})`;

    result = await pool.query(basicQuery + filter, productsList);
  } else {
    result = await pool.query(`${basicQuery} ORDER BY id DESC LIMIT 30;`);
  }

  return result.rows;
}
