import fetchProducts from '../queries/fetchProducts.js';

export default async function getProducts(req, res) {
  const { id } = req.query;
  try {
    const productsFound = await fetchProducts(id);

    res.send(productsFound);
  } catch (error) {
    res.send(500);
  }
}
