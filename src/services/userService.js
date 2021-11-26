import bcrypt from 'bcrypt';
import { v4 as tokenGenerator } from 'uuid';
import * as userRepository from '../repositories/userRepository.js';
import * as tokenRepository from '../repositories/tokenRepository.js';
import * as userValidation from '../validations/userValidation.js';

async function create(user) {
  const { name, password, email, cpf } = user;

  const validation = userValidation.validateCreation(user);

  if (validation.isInvalid) return validation;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const result = userRepository.create({
    name,
    password: hashedPassword,
    email,
    cpf,
  });
  return result.rows;
}

async function authenticate(userData) {
  const { validation, user } = await userValidation.validateAuth(userData);

  if (validation.isInvalid) return validation;

  const token = await tokenRepository.find(user.id);

  let userToken;

  if (token) {
    userToken = token;
  } else {
    userToken = tokenGenerator();

    await tokenRepository.create(user.id, userToken);
  }

  return { name: user.name, token: userToken };
}

export { create, authenticate };
