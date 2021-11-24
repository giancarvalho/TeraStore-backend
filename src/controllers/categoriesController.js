import * as categoryService from '../services/categoryService.js';

async function create(req, res) {
  const categoryData = req.body;

  try {
    const category = await categoryService.create(categoryData);

    if (category.isInvalid) {
      return res.status(category.errorCode).send(category.errorMessage);
    }

    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function get(req, res) {
  try {
    const categories = await categoryService.findAll();

    res.send(categories);
  } catch (error) {
    res.sendStatus(500);
  }
}

export { create, get };
