import '../src/setup.js';
import supertest from 'supertest';
import app from '../src/app.js';
import insertProduct from '../src/queries/insertProduct.js';
import generateFakeProduct from './factories/productFactory.js';
import insertCategory from '../src/queries/insertCategory.js';
import generateCategory from './factories/categoryFactory.js';
import cleanDatabase from '../src/queries/cleanDatabase.js';
import pool from '../src/database.js';

describe('GET /products', () => {
  let products;

  beforeAll(async () => {
    const categoryId = await insertCategory(generateCategory());
    products = [
      generateFakeProduct(categoryId),
      generateFakeProduct(categoryId),
    ];
    await insertProduct(products[0]);
    await insertProduct(products[1]);
  });

  afterAll(async () => {
    await cleanDatabase();
    pool.end();
  });

  it('should return two items', async () => {
    const result = await supertest(app).get(`/products`);
    console.log(result.body);
    expect(result.body.length === 2).toBeTruthy();
  });
});
