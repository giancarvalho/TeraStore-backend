import '../src/setup.js';
import supertest from 'supertest';
import app from '../src/app.js';
import cleanDatabase from '../src/queries/cleanDatabase.js';
import * as userService from '../src/services/userService.js';
import pool from '../src/database.js';
import createFakerUser from './factories/userFactory';

describe('POST /sign-up', () => {
  afterAll(async () => {
    await cleanDatabase();
    pool.end();
  });

  it('Should return a 400 status if body is invalid', async () => {
    const body = {};

    const result = await supertest(app).post('/sign-up').send(body);

    expect(result.status).toEqual(400);
  });

  it('should return status 201 if body is valid', async () => {
    const body = createFakerUser();

    const result = await supertest(app).post('/sign-up').send(body);

    expect(result.status).toEqual(201);
  });
});
