import * as productRepository from '../repositories/productRepository.js';
import * as categoryRepository from '../repositories/categoryRepository.js';
import validateNewProduct from '../validations/newProduct.js';

async function findNewest() {
  const productsFound = await productRepository.findNewest();
  return productsFound;
}

async function create(productData) {
  const validation = await validateNewProduct(productData);

  if (validation.isInvalid) return validation;
  const id = await productRepository.create(productData);
  return { id };
}

async function findByCategory(categoryId) {
  const category = (await categoryRepository.find(categoryId))[0];
  const products = await productRepository.findByCategory(categoryId);

  return { name: category.name, products };
}

export { findNewest, create, findByCategory };
