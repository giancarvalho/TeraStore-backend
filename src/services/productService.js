import * as productRepository from '../repositories/productRepository.js';
import validateNewProduct from '../validations/newProduct.js';

async function findNewest() {
  return productRepository.findNewest();
}

async function create(productData) {
  const validation = await validateNewProduct(productData);

  if (validation.isInvalid) return validation;

  return productRepository.create(productData);
}

export { findNewest, create };
