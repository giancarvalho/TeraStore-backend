import express from 'express';
import cors from 'cors';
import createOrder from './controllers/createOrder.js';
import returnCartProducts from './controllers/returnCartProducts.js';
import auth from './middlewares/auth.js';
import * as userController from './controllers/userController.js';
import * as categoryController from './controllers/categoriesController.js';
import * as productController from './controllers/productController.js';
import * as formController from './controllers/formController.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/products', productController.getNewest);
app.post('/products', productController.create);
app.get('/products/:categoryId', productController.getByCategory);

app.get('/categories', categoryController.get);
app.post('/categories', categoryController.create);

app.post('/cart', returnCartProducts);

app.post('/order', createOrder);

app.get('/form-details', auth, formController.get);

app.post('/sign-up', userController.signUp);
app.post('/sign-in', userController.signIn);

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

export default app;
