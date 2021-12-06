import express from 'express';
import * as categoryController from '../controllers/categoriesController.js';

const route = express.Router();

route.get('', categoryController.get);
route.post('', categoryController.create);

export default route;
