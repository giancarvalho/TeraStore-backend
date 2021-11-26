import bcrypt from 'bcrypt';
import generateErrorMessage from '../factories/errorMessageFactory.js';
import * as userRepository from '../repositories/userRepository.js';
import userSchema from './schemas/newUserSchema.js';

async function validateAuth(userData) {
  let validation = { isInvalid: false };

  try {
    if (!userData.email || !userData.password) {
      validation = generateErrorMessage(400);

      return { validation };
    }

    const userSearch = await userRepository.find(userData.email);

    if (userSearch.rowCount === 0) {
      validation = generateErrorMessage(404, 'User not found');

      return { validation };
    }

    const user = userSearch.rows[0];

    const correctPassword = bcrypt.compareSync(
      userData.password,
      user.password,
    );

    if (!correctPassword) {
      validation = generateErrorMessage(401, 'Wrong password');
      return { validation };
    }

    return { validation, user };
  } catch (error) {
    return generateErrorMessage(500);
  }
}

async function validateCreation(userData) {
  const joiValidation = userSchema.validate(userData);
  let validation = { isInvalid: false };

  try {
    if (joiValidation.error) {
      validation = generateErrorMessage(
        400,
        joiValidation.error.details[0].message,
      );

      return validation;
    }

    const isUser = await userRepository.find(userData.email);

    if (isUser.rowCount > 0) {
      validation = generateErrorMessage(
        409,
        'This email is already registered.',
      );

      return validation;
    }

    return validation;
  } catch (error) {
    validation = generateErrorMessage(500, 'Unknown error');

    return validation;
  }
}

export { validateAuth, validateCreation };
