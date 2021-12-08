import bcrypt from 'bcrypt';
import { v4 as tokenGenerator } from 'uuid';
import * as userRepository from '../repositories/userRepository.js';
import * as tokenRepository from '../repositories/tokenRepository.js';
import * as userValidation from '../validations/userValidation.js';

async function create(user) {
  const { name, password, email, cpf } = user;

  const validation = await userValidation.validateCreation(user);

  if (validation.isInvalid) return validation;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const result = await userRepository.create({
    name,
    password: hashedPassword,
    email,
    cpf,
  });

  return { id: result };
}

async function authenticate(userData) {
  const { validation, user } = await userValidation.validateAuth(userData);

  if (validation.isInvalid) return validation;

  const tokenData = await tokenRepository.find(user.id);

  let userToken;
  console.log(tokenData);
  if (tokenData) {
    userToken = tokenData.token;
  } else {
    userToken = tokenGenerator();

    await tokenRepository.create(user.id, userToken);
  }

  return { name: user.name, token: userToken };
}

export { create, authenticate };
