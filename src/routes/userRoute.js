import express from 'express';
import * as userController from '../controllers/userController.js';

const route = express.Router();

route.post('/sign-up', userController.signUp);
route.post('/sign-in', userController.signIn);

export default route;
