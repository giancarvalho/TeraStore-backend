import * as tokenRepository from '../repositories/tokenRepository.js';

async function auth(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) return res.sendStatus(401);

  const user = await tokenRepository.find(token);

  if (!user) return res.sendStatus(401);

  req.local = user;

  next();
}

export default auth;
