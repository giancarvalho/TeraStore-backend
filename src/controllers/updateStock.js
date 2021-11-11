import generateErrorMessage from '../factories/errorMessageFactory.js';
import fetchProducts from '../queries/fetchProducts.js';
import updateProduct from '../queries/updateProduct.js';

export default async function updateStock(req, res) {
  const { id, amount } = req.body;
  try {
    const product = await fetchProducts(id);
    if (!product.length) throw generateErrorMessage(404, 'Product not found');

    const newStock = product[0].stock - amount;
    if (newStock < 0) throw generateErrorMessage(401, 'Not enough stock');

    await updateProduct(product[0].id, 'stock', newStock);

    res.sendStatus(200);
  } catch (error) {
    if (error.isInvalid) {
      return res.sendStatus(error.errorCode).send(error.errorMessage);
    }

    res.sendStatus(500);
  }
}
