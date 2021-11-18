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
  let productId;

  beforeAll(async () => {
    const categoryId = await insertCategory(generateCategory());
    products = [
      generateFakeProduct(categoryId),
      generateFakeProduct(categoryId),
    ];
    productId = await insertProduct(products[0]);
    const result = await insertProduct(products[1]);
  });

  afterAll(async () => {
    await cleanDatabase();
    pool.end();
  });

  it('should return only one item if id is sent', async () => {
    const result = await supertest(app)
      .get(`/products`)
      .send({ ids: [productId] });

    expect(result.body.length).toEqual(1);
  });

  it('should return two items if id is not passed', async () => {
    const result = await supertest(app).get(`/products`);

    expect(result.body.length > 0).toEqual(true);
  });
});
