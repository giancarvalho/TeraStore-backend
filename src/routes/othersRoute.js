import express from 'express';
import * as formController from '../controllers/formController.js';

const route = express.Router();

route.get('/form-details', formController.get);

export default route;
