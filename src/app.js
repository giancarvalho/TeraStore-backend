import express from 'express';
import cors from 'cors';
import { createProducts, getProducts } from './controllers/products.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/products', getProducts);
app.post('/products', createProducts);

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

export default app;
