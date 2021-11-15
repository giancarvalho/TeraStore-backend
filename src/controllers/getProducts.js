import fetchProducts from '../queries/fetchProducts.js';

export default async function getProducts(req, res) {
  try {
    const productsFound = await fetchProducts();

    res.send(productsFound);
  } catch (error) {
    res.sendStatus(500);
  }
}
