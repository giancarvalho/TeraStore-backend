import supertest from 'supertest';
import '../src/setup.js';
import app from '../src/app.js';
import pool from '../src/database.js';
import generateFakeProduct from './factories/productFactory.js';
import generateCategory from './factories/categoryFactory.js';
import cleanDatabase from '../src/queries/cleanDatabase.js';
import * as productRepository from '../src/repositories/productRepository.js';
import * as categoryRepository from '../src/repositories/categoryRepository.js';

describe('POST /products', () => {
  let categoryId;
  let productData;
  beforeAll(async () => {
    categoryId = await categoryRepository.create(generateCategory());
    productData = generateFakeProduct(categoryId);
    await productRepository.create(productData);
  });

  afterAll(async () => {
    await cleanDatabase();
    pool.end();
  });

  it('should return 201 if product data is valid', async () => {
    const fakeProduct = generateFakeProduct(categoryId);

    const result = await supertest(app).post('/products').send(fakeProduct);

    expect(result.status).toEqual(201);
  });

  it('should return 409 if product is already registered', async () => {
    const result = await supertest(app).post('/products').send(productData);

    expect(result.status).toEqual(409);
  });

  it('should return 400 if product is invalid', async () => {
    const invalidProduct = generateFakeProduct(categoryId);

    delete invalidProduct['name'];

    const result = await supertest(app).post('/products').send(invalidProduct);

    expect(result.status).toEqual(400);
  });
});
