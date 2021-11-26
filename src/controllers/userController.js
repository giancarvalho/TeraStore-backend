import * as userService from '../services/userService.js';

async function signUp(req, res) {
  const userData = req.body;

  try {
    const request = await userService.create(userData);

    if (request.isInvalid) {
      return res.status(request.errorCode).send(request.errorMessage);
    }

    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500);
  }
}

async function signIn(req, res) {
  const userData = req.body;

  try {
    const request = await userService.authenticate(userData);

    if (request.isInvalid) {
      return res.status(request.errorCode).send(request.errorMessage);
    }

    res.send(request);
  } catch (error) {
    res.sendStatus(500);
  }
}

export { signUp, signIn };
