import supertest from 'supertest';
import '../src/setup.js';
import app from '../src/app.js';
import pool from '../src/database.js';
import generateFakeProduct from './factories/productFactory.js';
import generateCategory from './factories/categoryFactory.js';
import cleanDatabase from '../src/queries/cleanDatabase.js';
import insertCategory from '../src/queries/insertCategory.js';
import insertProduct from '../src/queries/insertProduct.js';

describe('PUT /products/stock', () => {
  let productData;
  let productId;

  beforeAll(async () => {
    const categoryId = await insertCategory(generateCategory());
    productData = generateFakeProduct(categoryId);
    productId = await insertProduct(productData);
  });

  afterAll(async () => {
    await cleanDatabase();
    pool.end();
  });

  it('should return 200 if product stock is updated correctly', async () => {
    const body = { 
      id: productId,
      amount: productData.stock,
    };
    const result = await supertest(app).put('/products/stock').send(body);

    expect(result.status).toEqual(200);
  });

  it('should return 404 if product id is invalid', async () => {
    const body = { 
      id: 1,
      amount: productData.stock,
    };
    const result = await supertest(app).put('/products/stock').send(body);

    expect(result.status).toEqual(404);
  });

  it('should return 401 if product stock would end up negative', async () => {
    const body = { 
      id: productId,
      amount: productData.stock,
    };
    const result = await supertest(app).put('/products/stock').send(body);

    expect(result.status).toEqual(401);
  });

  it('should return 400 if product id is missing', async () => {
    const body = { 
      amount: productData.stock,
    };
    const result = await supertest(app).put('/products/stock').send(body);

    expect(result.status).toEqual(400);
  });

  it('should return 400 if amount is missing', async () => {
    const body = {
      id: productId,
    };
    const result = await supertest(app).put('/products/stock').send(body);

    expect(result.status).toEqual(400);
  });
});
