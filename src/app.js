import express from 'express';
import cors from 'cors';
import auth from './middlewares/auth.js';
import * as userController from './controllers/userController.js';
import * as categoryController from './controllers/categoriesController.js';
import * as productController from './controllers/productController.js';
import * as formController from './controllers/formController.js';
import * as orderController from './controllers/orderController.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/products', productController.getNewest);
app.post('/products', productController.create);
app.get('/products/:categoryId', productController.getByCategory);
app.post('/products/cart', productController.getProductsInCart);

app.get('/categories', categoryController.get);
app.post('/categories', categoryController.create);

app.post('/sign-up', userController.signUp);
app.post('/sign-in', userController.signIn);

app.post('/order', auth, orderController.create);

app.get('/form-details', auth, formController.get);

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

export default app;
