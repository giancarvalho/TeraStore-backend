import '../src/setup.js';
import supertest from 'supertest';
import app from '../src/app.js';
import generateFakeProduct from './factories/productFactory.js';
import generateCategory from './factories/categoryFactory.js';
import cleanDatabase from '../src/queries/cleanDatabase.js';
import * as categoryRepository from '../src/repositories/categoryRepository.js';
import * as productRepository from '../src/repositories/productRepository.js';
import pool from '../src/database.js';

describe('GET /products', () => {
  let products;

  beforeAll(async () => {
    const categoryId = await categoryRepository.create(generateCategory());
    products = [
      generateFakeProduct(categoryId),
      generateFakeProduct(categoryId),
    ];
    await productRepository.create(products[0]);
    await productRepository.create(products[1]);
  });

  afterAll(async () => {
    await cleanDatabase();
    pool.end();
  });

  it('should return two items', async () => {
    const result = await supertest(app).get(`/products`);

    expect(result.body.length === 2).toBeTruthy();
  });
});
