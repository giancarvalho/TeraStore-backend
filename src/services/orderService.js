import validateNewOrder from '../validations/newOrder.js';
import * as addressRepository from '../repositories/addressRepository.js';
import * as orderRepository from '../repositories/orderRepository.js';

async function create({ products, clientId, paymentId, address }) {
  const addressValues = Object.values(address);
  const validation = await validateNewOrder(products, address);

  if (validation.isInvalid) return validation;

  const addressId = await addressRepository.insertOrGet(addressValues);

  const orderId = await orderRepository.create(
    clientId,
    addressId,
    paymentId,
    products,
  );

  return { orderId };
}

export { create };
