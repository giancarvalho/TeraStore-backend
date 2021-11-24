import pool from '../database.js';

async function findList(productsList) {
  const basicQuery = 'SELECT * FROM products';
  let idPool = '';

  if (productsList) {
    productsList.forEach((product, index) => {
      if (index === productsList.length - 1) {
        idPool += `$${index + 1}`;
      } else {
        idPool += `$${index + 1}, `;
      }
    });
  }
  const filter = ` WHERE id in (${idPool})`;

  const result = await pool.query(basicQuery + filter, productsList);

  return result.rows;
}

async function findNewest() {
  const result = await pool.query(
    'SELECT * FROM products ORDER BY id DESC LIMIT 30;',
  );

  return result.rows;
}

export { findList, findNewest };
