import insertProduct from '../queries/insertProduct.js';
import validateNewProduct from '../validations/newProduct.js';

export default async function createProducts(req, res) {
  const productData = req.body;
  const validation = await validateNewProduct(productData);
  try {
    if (validation.isInvalid) throw validation.errorCode;

    const id = await insertProduct(productData);

    res.status(201).send({ id });
  } catch (error) {
    if (validation.isInvalid) {
      return res.status(error).send(validation.errorMessage);
    }

    res.sendStatus(500);
  }
}
