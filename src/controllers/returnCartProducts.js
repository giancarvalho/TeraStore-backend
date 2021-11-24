import * as productRepository from '../repositories/productRepository.js';

export default async function returnCartProducts(req, res) {
  const { ids } = req.body;
  if (!ids) return res.sendStatus(400);
  try {
    const productsFound = await productRepository.findList(ids);

    res.send(productsFound);
  } catch (error) {
    res.sendStatus(500);
  }
}
