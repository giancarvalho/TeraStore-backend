import * as orderService from '../services/orderService.js';

async function create(req, res) {
  const { client_id: clientId } = req.local;
  const { products, address, paymentId } = req.body;

  try {
    const createOrderRequest = await orderService.create({
      products,
      clientId,
      paymentId,
      address,
    });

    if (createOrderRequest.isInvalid) {
      return res
        .status(createOrderRequest.errorCode)
        .send(createOrderRequest.errorMessage);
    }

    res.status(201).send(createOrderRequest);
  } catch (error) {
    res.sendStatus(500);
  }
}

export { create };
