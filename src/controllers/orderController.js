import * as orderService from '../services/orderService.js';

async function create(req, res) {
  const { client_id: clientId } = req.local;
  const { products, address, paymentId } = req.body;

  try {
    const request = await orderService.create({
      products,
      clientId,
      paymentId,
      address,
    });

    if (request.isInvalid) {
      return res.status(request.errorCode).send(request.errorMessage);
    }

    res.status(201).send(request);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { create };
