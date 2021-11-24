import * as productService from '../services/productService.js';

async function getNewest(req, res) {
  try {
    const productsFound = await productService.findNewest();

    res.send(productsFound);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function create(req, res) {
  const productData = req.body;

  try {
    const product = await productService.create(productData);

    if (product.isInvalid) {
      return res.status(product.errorCode).send(product.errorMessage);
    }

    res.status(201).send({ id: product.id });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { getNewest, create };
