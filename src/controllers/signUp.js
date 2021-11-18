import createUser from '../queries/createUser.js';

export default async function signUp(req, res) {
  const userData = req.body;

  try {
    await createUser(userData);

    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500);
  }
}
