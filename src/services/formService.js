import * as formRepository from '../repositories/formRepository.js';

async function get() {
  const states = await formRepository.getStates();

  const paymentTypes = await formRepository.getPaymentTypes();

  return { states, paymentTypes };
}

export { get };
