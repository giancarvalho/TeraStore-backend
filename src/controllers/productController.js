import * as productService from '../services/productService.js';

async function getNewest(req, res) {
  try {
    const request = await productService.findNewest();

    res.send(request);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function getByCategory(req, res) {
  const { categoryId } = req.query;

  try {
    const request = await productService.findByCategory(categoryId);

    res.send(request);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function create(req, res) {
  const productData = req.body;

  try {
    const request = await productService.create(productData);

    if (request.isInvalid) {
      return res.status(request.errorCode).send(request.errorMessage);
    }

    res.status(201).send(request);
  } catch (error) {
    res.sendStatus(500);
  }
}

export { getNewest, create, getByCategory };
