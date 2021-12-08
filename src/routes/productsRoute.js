import express from 'express';
import * as productController from '../controllers/productController.js';

const route = express.Router();

route.get('', productController.getNewest);
route.post('', productController.create);
route.get('/:categoryId', productController.getByCategory);
route.post('/cart', productController.getProductsInCart);

export default route;
