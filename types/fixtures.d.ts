import { UserClient } from '../api/clients/userClient';

declare module '@playwright/test' {
  interface PlaywrightTestArgs {
    userApi: UserClient;
  }
}
