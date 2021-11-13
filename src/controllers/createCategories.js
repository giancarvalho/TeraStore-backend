import insertCategory from '../queries/insertCategory.js';
import validateNewCategory from '../validations/newCategory.js';

export default async function createCategory(req, res) {
  const category = req.body;
  const validation = await validateNewCategory(category.name);

  try {
    if (validation.isInvalid) throw validation.errorCode;
    await insertCategory(category.name);

    res.sendStatus(201);
  } catch (error) {
    if (validation.isInvalid) {
      return res.status(error).send(validation.errorMessage);
    }

    res.sendStatus(500);
  }
}
