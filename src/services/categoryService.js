import * as categoryValidation from '../validations/categoryValidation.js';
import * as categoryRepository from '../repositories/categoryRepository.js';

async function create(category) {
  const { validation } = await categoryValidation.validateCreation(
    category.name,
  );

  if (validation.isInvalid) return validation;

  return categoryRepository.create(category.name);
}

async function findAll() {
  return categoryRepository.findAll();
}

export { create, findAll };
