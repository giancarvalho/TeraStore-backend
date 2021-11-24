import * as userService from '../services/userService.js';

async function signUp(req, res) {
  const userData = req.body;

  try {
    const result = await userService.create(userData);
    console.log(result);
    if (!result) return res.sendStatus(400);

    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function signIn(req, res) {
  const userData = req.body;

  try {
    const user = await userService.authenticate(userData);

    if (user.isInvalid) {
      return res.status(user.errorCode).send(user.errorMessage);
    }

    res.send({ name: user.name, token: user.token });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { signUp, signIn };
