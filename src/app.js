import express from 'express';
import cors from 'cors';

import othersRoute from './routes/othersRoute.js';
import productRoute from './routes/productsRoute.js';
import categoryRoute from './routes/categoriesRoute.js';
import userRoute from './routes/userRoute.js';
import orderRoute from './routes/orderRoute.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/products', productRoute);
app.use('/categories', categoryRoute);
app.use('/order', orderRoute);
app.use(userRoute);
app.use(othersRoute);

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

export default app;
