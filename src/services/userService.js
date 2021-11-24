import bcrypt from 'bcrypt';
import { v4 as tokenGenerator } from 'uuid';
import * as userRepository from '../repositories/userRepository.js';
import * as tokenRepository from '../repositories/tokenRepository.js';
import * as userValidation from '../validations/userValidation.js';

async function create(user) {
  const { name, password, email, cpf } = user;

  if (!name || !password || !email || !cpf) {
    return null;
  }

  const hashPassword = bcrypt.hashSync(password, 10);

  return userRepository.create({ name, hashPassword, email, cpf });
}

async function authenticate(userData) {
  const { validation, user } = await userValidation.validate(userData);

  if (validation.isInvalid) return validation;

  const tokenSearch = await tokenRepository.find(user.id);

  let userToken;

  if (tokenSearch.rowCount > 0) {
    userToken = tokenSearch.rows[0].token;
  } else {
    userToken = tokenGenerator();

    await tokenRepository.create(user.id, userToken);
  }

  return { name: user.name, token: userToken };
}

export { create, authenticate };
