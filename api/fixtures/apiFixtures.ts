import { test as base } from '@playwright/test';
import { UserClient } from '../clients/userClient';
import { env } from '../../utils/env';

export const test = base.extend({
  userApi: async ({ request }, use) => {
    await use(new UserClient(request, env.userApi));
  },
});

export { expect } from '@playwright/test';
