import * as userService from '../services/userService.js';

async function signUp(req, res) {
  const userData = req.body;

  try {
    const createUserRequest = await userService.create(userData);

    if (createUserRequest.isInvalid) {
      return res
        .status(createUserRequest.errorCode)
        .send(createUserRequest.errorMessage);
    }

    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500);
  }
}

async function signIn(req, res) {
  const userData = req.body;

  try {
    const authUserRequest = await userService.authenticate(userData);

    if (authUserRequest.isInvalid) {
      return res
        .status(authUserRequest.errorCode)
        .send(authUserRequest.errorMessage);
    }

    res.send(authUserRequest);
  } catch (error) {
    res.sendStatus(500);
  }
}

export { signUp, signIn };
