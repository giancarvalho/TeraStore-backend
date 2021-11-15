import express from 'express';
import cors from 'cors';
import createProducts from './controllers/createProducts.js';
import getProducts from './controllers/getProducts.js';
import createCategory from './controllers/createCategories.js';
import getCategories from './controllers/getCategories.js';
import createOrder from './controllers/createOrder.js';
import returnCartProducts from './controllers/returnCartProducts.js';
import getFormDetails from './controllers/getFormDetails.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/products', getProducts);
app.post('/products', createProducts);

app.get('/categories', getCategories);
app.post('/categories', createCategory);

app.post('/cart', returnCartProducts);

app.post('/order', createOrder);

app.get('/form-details', getFormDetails);

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

export default app;
