import validateNewCategory from '../validations/newCategory.js';
import * as categoryRepository from '../repositories/categoryRepository.js';

async function create(category) {
  const validation = await validateNewCategory(category.name);

  if (validation.isInvalid) return validation;

  return categoryRepository.create(category.name);
}

export { create };
