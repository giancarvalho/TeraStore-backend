import generateErrorMessage from '../factories/errorMessageFactory.js';
import newCategorySchema from './schemas/newCategorySchema.js';
import * as categoryRepository from '../repositories/categoryRepository.js';

async function validateCreation(category) {
  let validation = { isInvalid: false };
  const joiValidation = newCategorySchema.validate(category);

  try {
    if (joiValidation.error) {
      validation = generateErrorMessage(
        400,
        joiValidation.error.details[0].message,
      );

      return { validation };
    }

    const isExistingCategory = await categoryRepository.find(category);

    if (isExistingCategory.length > 0) {
      validation = generateErrorMessage(409, 'Category is already registered.');

      return { validation };
    }

    return { validation };
  } catch (error) {
    validation = generateErrorMessage(500, 'unknown error');

    return { validation };
  }
}

export { validateCreation };
