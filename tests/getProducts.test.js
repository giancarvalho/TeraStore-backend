import '../src/setup';
import supertest from 'supertest';
import app from '../src/app';
import insertProduct from '../src/queries/insertProduct';
import generateFakeProduct from './factories/productFactory';
import insertCategory from '../src/queries/insertCategory';
import generateCategory from './factories/categoryFactory';
import cleanDatabase from '../src/queries/cleanDatabase';
import pool from '../src/database';

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
    await insertProduct(products[1]);
  });

  afterAll(async () => {
    await cleanDatabase();
    pool.end();
  });

  it('should return only one item if id is sent', async () => {
    const result = await supertest(app).get(`/products?id=${productId}`);

    expect(result.body.length).toEqual(1);
  });

  it('should return two items if id is not passed', async () => {
    const result = await supertest(app).get(`/products`);

    expect(result.body.length).toEqual(2);
  });
});
