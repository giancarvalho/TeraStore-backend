import joi from 'joi';

const productSchema = joi.object({
  name: joi.string().min(3).max(30).required(),
  price: joi.number().min(1).max(10000).required(),
  categoryId: joi.number().min(1).required(),
  image: joi
    .string()
    .pattern(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|png))/)
    .required(),
  stock: joi.number().min(1).required(),
});

export default productSchema;
