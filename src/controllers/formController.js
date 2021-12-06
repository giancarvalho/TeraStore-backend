import * as formService from '../services/formService.js';

async function get(req, res) {
  try {
    const getFormDetailsRequest = await formService.get();

    res.send(getFormDetailsRequest);
  } catch (error) {
    res.sendStatus(500);
  }
}

export { get };
