import { test } from "../fixtures/auth";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

/**
 * Набор тестов, связанных с авторизацией.
 *
 * Здесь мы проверяем два ключевых сценария:
 *   1) негативный логин (неправильные данные)
 *   2) успешный логин (через фикстуру login)
 *
 * Благодаря Page Object и фикстурам:
 *   - тесты короткие и декларативные
 *   - UI‑детали скрыты внутри LoginPage / InventoryPage
 *   - логика логина не дублируется
 */
test.describe("login tests", () => {

  /**
   * Негативный сценарий логина.
   *
   * Здесь мы НЕ используем фикстуру login,
   * потому что хотим проверить сам процесс логина
   * и убедиться, что приложение корректно показывает ошибку.
   *
   * Тест работает напрямую с LoginPage:
   *   - вызывает login() с неверными данными
   *   - проверяет текст ошибки через expectError()
   */
  test("negative login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login("wrong_user", "secret_sauce");
    await loginPage.expectError("Epic sadface");
  });

  /**
   * Позитивный сценарий логина.
   *
   * Здесь мы используем фикстуру `login`, которая:
   *   - автоматически выполняет логин
   *   - дожидается загрузки InventoryPage
   *   - передаёт в тест готовый Page Object
   *
   * Тесту остаётся только проверить, что страница действительно загрузилась.
   */
  test("valid login", async ({ app }) => {
    await expect(app.title).toHaveText("Products");
  });
});
