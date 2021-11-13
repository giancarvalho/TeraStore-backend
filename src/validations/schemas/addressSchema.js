import joi from 'joi';

const addressSchema = joi.object({
  street: joi.string().min(3).max(200).required(),
  number: joi.number().min(1).max(10).required(),
  complement: joi.string().max(100).allow('').optional(),
  zipcode: joi
    .string()
    .length(8)
    .pattern(/^[0-9]+$/)
    .required(),
  neighborhood: joi.string().min(3).max(30).required(),
  city: joi.string().min(3).max(30).required(),
  stateId: joi.number().required(),
});

export default addressSchema;
