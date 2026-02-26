import { test, expect } from '../fixtures/webFixtures';

/**
 * Набор тестов, связанных с авторизацией.
 *
 * test.describe() группирует тесты логически:
 *   - в отчётах они идут одним блоком
 *   - в UI‑режиме Playwright их удобно разворачивать/сворачивать
 */
test.describe('Login flow', () => {
  /**
   * Проверяет, что пользователь может успешно войти в систему.
   *
   * Фикстуры loginPage и dashboardPage автоматически приходят
   * из webFixtures.ts благодаря test.extend().
   *
   * Такой подход делает тесты чистыми:
   *   - тест не знает, как создаются страницы
   *   - тест не знает, откуда берётся baseUrl
   *   - тест работает только с поведением, а не с инфраструктурой
   */
  test('user can login successfully', async ({ loginPage, dashboardPage }) => {
    // 1. Открываем страницу логина
    //    Страница сама знает свой путь (/login), тесту это знать не нужно.
    await loginPage.open();

    // 2. Выполняем логин
    //    Метод login описывает действие пользователя, а не клики.
    await loginPage.login('admin', '1234');

    // 3. Проверяем, что мы на дашборде
    //    Проверка идёт через локатор страницы DashboardPage.
    await expect(dashboardPage.welcomeText).toHaveText(/Welcome/i);
  });
});
