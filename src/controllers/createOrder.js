import format from 'pg-format';
import pool from '../database.js';
import getTokenData from '../queries/getToken.js';
import insertOrGetAddress from '../queries/insertOrGetAddress.js';
import validateNewOrder from '../validations/newOrder.js';

export default async function createOrder(req, res) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.sendStatus(401);
  const { products, address, paymentId } = req.body;
  const addressValues = Object.values(address);
  const productValues = [];
  const validation = await validateNewOrder(products, address);

  try {
    if (validation.isInvalid) throw validation.errorCode;
    const clientId = (await getTokenData(token)).rows[0].client_id;

    const addressId = await insertOrGetAddress(addressValues);

    const orderId = (
      await pool.query(
        'INSERT INTO orders (client_id, address_id, payment_id) VALUES ($1, $2, $3) RETURNING id',
        [clientId, addressId, paymentId],
      )
    ).rows[0].id;

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
    console.log(error);
    res.sendStatus(500);
  }
}
