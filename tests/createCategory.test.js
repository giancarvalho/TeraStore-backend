import '../src/setup';
import supertest from 'supertest';
import app from '../src/app';
import generateCategory from './factories/categoryFactory';
import cleanDatabase from '../src/queries/cleanDatabase';
import pool from '../src/database';
import insertCategory from '../src/queries/insertCategory';

describe('POST /categories', () => {
  let existingCategory;
  beforeAll(async () => {
    existingCategory = generateCategory();
    await insertCategory(existingCategory);
  });

  afterAll(async () => {
    await cleanDatabase();
    pool.end();
  });

  it('should return 201 if category data is valid', async () => {
    const category = generateCategory();

    const result = await supertest(app)
      .post('/categories')
      .send({ name: category });

    expect(result.status).toEqual(201);
  });

  it('should return 409 if category already exists', async () => {
    const result = await supertest(app)
      .post('/categories')
      .send({ name: existingCategory });

    expect(result.status).toEqual(409);
  });
});
