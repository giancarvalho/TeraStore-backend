import generateErrorMessage from '../factories/errorMessageFactory.js';
import productSchema from './schemas/newProductSchema.js';
import fetchCategory from '../queries/fetchCategory.js';
import fetchProductByName from '../queries/fetchProductByName.js';

export default async function validateNewProduct(productData) {
  const joiValidation = productSchema.validate(productData);
  let validation = { isInvalid: false };
  try {
    if (joiValidation.error) {
      validation = generateErrorMessage(
        400,
        joiValidation.error.details[0].message,
      );

      return validation;
    }

    const isExistingProduct = await fetchProductByName(productData.name);

    if (isExistingProduct.length > 0) {
      validation = generateErrorMessage(409, 'Product is already registered');

      return validation;
    }

    const category = await fetchCategory(productData.categoryId);

    if (category.length === 0) {
      validation = generateErrorMessage(400, "Category doesn't exist");
      return validation;
    }
    return validation;
  } catch (error) {
    validation = generateErrorMessage(500, 'unknown error');

    return validation;
  }
}
