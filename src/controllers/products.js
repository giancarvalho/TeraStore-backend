import { insertProducts } from '../db/products.js';

function getProducts() {}

async function createProducts(req, res) {
  const productData = req.body;

  try {
    const id = await insertProducts(productData);

    res.status(201).send({ id });
  } catch (error) {
    res.sendStatus(500);
  }
}

export { getProducts, createProducts };
