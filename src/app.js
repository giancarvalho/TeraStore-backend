import express from 'express';
import cors from 'cors';
import createOrder from './controllers/createOrder.js';
import returnCartProducts from './controllers/returnCartProducts.js';
import getFormDetails from './controllers/getFormDetails.js';
import * as userController from './controllers/userController.js';
import * as categoryController from './controllers/categoriesController.js';
import * as productController from './controllers/productController.js';

import getProductsByCategory from './controllers/getProductsByCategory.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/products', productController.getNewest);
app.post('/products', productController.create);
app.get('/category-products', productController.getByCategory);

app.get('/categories', categoryController.get);
app.post('/categories', categoryController.create);

app.post('/cart', returnCartProducts);

app.post('/order', createOrder);

app.get('/form-details', getFormDetails);

app.post('/sign-up', userController.signUp);
app.post('/sign-in', userController.signIn);

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

export default app;
