import format from 'pg-format';
import pool from '../database.js';
import getTokenData from '../queries/getToken.js';
import insertOrGetAddress from '../queries/insertOrGetAddress.js';
import validateNewOrder from '../validations/newOrder.js';
import insertOrder from '../queries/insertOrder.js';

export default async function createOrder(req, res) {
  const { client_id: clientId } = req.local;
  const { products, address, paymentId } = req.body;
  const addressValues = Object.values(address);
  const productValues = [];
  const validation = await validateNewOrder(products, address);

  try {
    if (validation.isInvalid) throw validation.errorCode;

    const addressId = await insertOrGetAddress(addressValues);

    const orderId = await insertOrder(clientId, addressId, paymentId);

    products.forEach((product) => {
      const productValue = [product.id, orderId, product.amount];
      productValues.push(productValue);
    });

    await pool.query(
      format(
        'INSERT INTO order_product (product_id, order_id, amount) VALUES %L;',
        productValues,
      ),
      [],
    );
    res.status(201).send({ orderId });
  } catch (error) {
    if (validation.isInvalid) {
      return res.status(error).send(validation.errorMessage);
    }

    res.sendStatus(500);
  }
}
