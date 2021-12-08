import '../src/setup.js';
import supertest from 'supertest';
import app from '../src/app.js';
import cleanDatabase from '../src/queries/cleanDatabase.js';
import * as userService from '../src/services/userService.js';
import pool from '../src/database.js';
import createFakerUser from './factories/userFactory';

describe('GET /products', () => {
  let user;
  beforeAll(async () => {
    user = createFakerUser();
    await userService.create(user);
  });

  afterAll(async () => {
    await cleanDatabase();
    pool.end();
  });

  it('should return 400 if email or password is missing', async () => {
    const body = { email: user.email };
    const result = await supertest(app).post('/sign-in').send(body);

    expect(result.status).toEqual(400);
  });

  it('should return 404 if credentials are not found', async () => {
    const body = createFakerUser();
    const result = await supertest(app).post('/sign-in').send(body);

    expect(result.status).toEqual(404);
  });

  it('should get an object with properties token and name if credentials are valid', async () => {
    const result = await supertest(app).post('/sign-in').send(user);

    expect(result.body).toHaveProperty('name');
    expect(result.body).toHaveProperty('token');
  });
});
