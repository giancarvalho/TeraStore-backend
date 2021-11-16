import fetchProducts from '../queries/fetchProducts.js';

export default async function getProducts(req, res) {
  const { ids } = req.body;

  try {
    const productsFound = await fetchProducts(ids);

    res.send(productsFound);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
