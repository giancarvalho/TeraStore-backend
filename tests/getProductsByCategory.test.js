import '../src/setup.js';
import supertest from 'supertest';
import app from '../src/app.js';
import generateFakeProduct from './factories/productFactory.js';
import * as productRepository from '../src/repositories/productRepository.js';
import * as categoryRepository from '../src/repositories/categoryRepository.js';
import generateCategory from './factories/categoryFactory.js';
import cleanDatabase from '../src/queries/cleanDatabase.js';
import pool from '../src/database.js';

describe('GET /category-products', () => {
  let products;
  let firstCategoryId;

  beforeAll(async () => {
    firstCategoryId = await categoryRepository.create(generateCategory());
    const secondCategoryId = await categoryRepository.create(
      generateCategory(),
    );
    products = [
      generateFakeProduct(firstCategoryId),
      generateFakeProduct(firstCategoryId),
      generateFakeProduct(secondCategoryId),
    ];
    await productRepository.create(products[0]);
    await productRepository.create(products[1]);
    await productRepository.create(products[2]);
  });

  afterAll(async () => {
    await cleanDatabase();
    pool.end();
  });

  it("should return an object with category name and the two category's products", async () => {
    const result = await supertest(app).get(`/products/${firstCategoryId}`);

    expect(result.body).toHaveProperty('name');
    expect(result.body.products.length === 2).toBeTruthy();
  });
});
