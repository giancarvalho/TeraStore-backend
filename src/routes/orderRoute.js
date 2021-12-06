import express from 'express';
import auth from '../middlewares/auth.js';
import * as orderController from '../controllers/orderController.js';

const route = express.Router();

route.post('', auth, orderController.create);

export default route;
