import * as productRepository from '../repositories/productRepository.js';

async function findNewest() {
  return productRepository.findNewest();
}

export { findNewest };
