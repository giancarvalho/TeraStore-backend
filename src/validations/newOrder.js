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
    const productIds = productData.map((product) => product.id);
    const uniqProductIds = [...new Set(productIds)];
    const areProductsRegistered = await fetchProducts(uniqProductIds);

    if (areProductsRegistered.length < uniqProductIds.length) {
      validation = generateErrorMessage(
        400,
        'Some products are not registered',
      );

      return validation;
    }

    return validation;
  } catch (error) {
    validation = generateErrorMessage(500, 'unknown error');

    return validation;
  }
}
