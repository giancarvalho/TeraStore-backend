import * as formService from '../services/formService.js';

async function get(req, res) {
  try {
    const request = await formService.get();

    res.send(request);
  } catch (error) {
    res.sendStatus(500);
  }
}

export { get };
