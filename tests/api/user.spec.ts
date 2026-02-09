import { test, expect } from '@playwright/test';
import { UsersClient } from '../../helpers/usersClient';

test('GET /users returns list @api', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=1');
  console.log('------------');
  console.log('STATUS:', response.status());

  //expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.data.length).toBeGreaterThan(0);
});

test('GET users via client @api', async ({ request }) => {
  const api = new UsersClient(request);

  const response = await api.getUsers();
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.data.length).toBeGreaterThan(0);
});

test('POST create user', async ({ request }) => {
  const api = new UsersClient(request);

  const response = await api.createUser({
    name: 'David',
    job: 'QA'
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.name).toBe('David');
});
