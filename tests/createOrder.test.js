import '../src/setup.js';
import supertest from 'supertest';
import app from '../src/app.js';
import cleanDatabase from '../src/queries/cleanDatabase.js';
import * as userService from '../src/services/userService.js';
import * as productRepository from '../src/repositories/productRepository.js';
import * as formRepository from '../src/repositories/formRepository.js';
import * as categoryRepository from '../src/repositories/categoryRepository.js';
import pool from '../src/database.js';
import createFakerUser from './factories/userFactory.js';
import generateFakeAddress from './factories/addressFactory.js';
import faker from 'faker';
import generateCategory from './factories/categoryFactory.js';
import generateFakeProduct from './factories/productFactory.js';

describe('POST /order', () => {
  let userData;
  let productsIds = [];
  let paymentId;
  beforeAll(async () => {
    const user = createFakerUser();
    const categoryId = await categoryRepository.create(generateCategory());
    const products = [
      generateFakeProduct(categoryId),
      generateFakeProduct(categoryId),
    ];

    productsIds.push({
      id: await productRepository.create(products[0]),
      amount: 1,
    });
    productsIds.push({
      id: await productRepository.create(products[1]),
      amount: 1,
    });

    const payments = await formRepository.getPaymentTypes();
    paymentId = faker.random.arrayElement(payments).id;
    await userService.create(user);
    userData = await userService.authenticate(user);
  });

  afterAll(async () => {
    await cleanDatabase();
    pool.end();
  });

  it('should return 201 if order is created sucessfully', async () => {
    const address = await generateFakeAddress();

    const body = { address, paymentId, products: productsIds };

    const result = await supertest(app)
      .post('/order')
      .send(body)
      .set({ authorization: `Bearer ${userData.token}` });

    expect(result.status).toBe(201);
  });
});
