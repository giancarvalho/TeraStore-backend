import * as categoryService from '../services/categoryService.js';

async function create(req, res) {
  const categoryData = req.body;

  try {
    const createCategoryRequest = await categoryService.create(categoryData);

    if (createCategoryRequest.isInvalid) {
      return res
        .status(createCategoryRequest.errorCode)
        .send(createCategoryRequest.errorMessage);
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
