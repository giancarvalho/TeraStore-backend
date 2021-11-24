import * as productService from '../services/productService.js';

async function getNewest(req, res) {
  try {
    const productsFound = await productService.findNewest();

    res.send(productsFound);
  } catch (error) {
    res.sendStatus(500);
  }
}

export { getNewest };
