import { test as base } from '@playwright/test';
import { UserClient } from '../clients/userClient';
import { env } from '../../utils/env';

/**
 * Расширенная версия стандартного Playwright test().
 *
 * Здесь мы добавляем собственные фикстуры — в данном случае userApi.
 * Фикстуры позволяют:
 *   - создавать объекты один раз на тест
 *   - передавать их в тесты через параметры
 *   - изолировать логику инициализации клиентов
 *
 * В итоге тесты становятся чище:
 *   test('...', async ({ userApi }) => { ... })
 */
export const test = base.extend({
  /**
   * Фикстура userApi.
   *
   * Создаёт экземпляр UserClient и передаёт его в тест.
   * Playwright сам управляет временем жизни фикстуры:
   *   - создаёт перед тестом
   *   - уничтожает после теста
   *
   * @param request — встроенный HTTP‑клиент Playwright
   * @param use — функция, через которую фикстура передаётся в тест
   */
  userApi: async ({ request }, use) => {
    await use(new UserClient(request, env.userApi));
  },
});

/**
 * Экспортируем expect, чтобы тесты могли писать:
 *   import { test, expect } from '../fixtures/apiFixtures';
 *
 * Это делает API‑тесты полностью изолированными от web‑части.
 */
export { expect } from '@playwright/test';
