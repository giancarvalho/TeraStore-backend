/* eslint-disable no-await-in-loop */
import generateErrorMessage from '../factories/errorMessageFactory.js';
import addressSchema from './schemas/addressSchema.js';
import fetchProducts from '../queries/fetchProducts.js';

export default async function validateNewOrder(productData, addressData) {
  let validation = { isInvalid: false };
  const joiValidation = addressSchema.validate(addressData);

  try {
    if (joiValidation.error) {
      validation = generateErrorMessage(
        400,
        joiValidation.error.details[0].message,
      );

      return validation;
    }

    for (let i = 0; i < productData.length; i += 1) {
      const isProduct = await fetchProducts(productData[i].id);

      if (isProduct.length < 1) {
        validation = generateErrorMessage(
          400,
          'Some products are not registered',
        );
        return validation;
      }
    }

    return validation;
  } catch (error) {
    validation = generateErrorMessage(500, 'unknown error');

    return validation;
  }
}
