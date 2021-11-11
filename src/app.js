import express from 'express';
import cors from 'cors';
import createProducts from './controllers/createProducts.js';
import getProducts from './controllers/getProducts.js';
import updateStock from './controllers/updateStock.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/products', getProducts);
app.post('/products', createProducts);
app.put('/products/stock', updateStock);

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

export default app;
