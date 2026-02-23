import { test, expect } from '../fixtures/apiFixtures';

test('get user by id', async ({ userApi }) => {
  const res = await userApi.getUser(1);
  const body = await res.json();

  expect(res.status()).toBe(200);
  expect(body).toHaveProperty('id');
});
