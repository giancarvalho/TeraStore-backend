import joi from 'joi';

const newCategorySchema = joi.string().min(3).required();

export default newCategorySchema;
