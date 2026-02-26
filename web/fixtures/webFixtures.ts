import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import { env } from '../../utils/env';

/**
 * Расширяем стандартный Playwright test() своими UI‑фикстурами.
 *
 * Мы используем env.webBaseUrl вместо process.env напрямую,
 * потому что:
 *   - env.ts централизует конфигурацию
 *   - dotenv.config() вызывается один раз
 *   - переменные окружения валидируются в одном месте
 *   - код становится чище и безопаснее
 */
export const test = base.extend({
  /**
   * Фикстура loginPage.
   * Создаёт объект LoginPage и передаёт его в тест.
   */
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page, env.webBaseUrl));
  },

  /**
   * Фикстура dashboardPage.
   * Работает аналогично loginPage.
   */
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page, env.webBaseUrl));
  },
});

/**
 * Экспортируем expect, чтобы тесты могли писать:
 *   import { test, expect } from '../fixtures/webFixtures';
 */
export const expect = base.expect;
