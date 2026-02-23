import { UserClient } from '../api/clients/userClient';

/**
 * Расширение типов Playwright через module augmentation.
 *
 * Playwright передаёт фикстуры в тесты через интерфейс PlaywrightTestArgs.
 * Чтобы TypeScript "знал" о нашей фикстуре userApi, мы добавляем её сюда.
 *
 * После этого в тестах можно писать:
 *   test('...', async ({ userApi }) => { ... })
 *
 * И TypeScript будет понимать, что userApi — это UserClient.
 */
declare module '@playwright/test' {
  interface PlaywrightTestArgs {
    userApi: UserClient;
  }
}
