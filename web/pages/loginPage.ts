import { BasePage } from "./basePage";
import { expect } from "@playwright/test";

/**
 * Локальные селекторы страницы логина.
 *
 * Почему они вынесены в константу:
 *   - код становится чище
 *   - селекторы централизованы, но остаются в одном файле
 *   - TS понимает литералы благодаря `as const`
 *   - легко поддерживать: если UI изменится — меняем только здесь
 */
const SELECTORS = {
  username: { role: "textbox", name: "Username" },
  password: { role: "textbox", name: "Password" },
  loginBtn: { role: "button", name: "Login" },
  errorMessage: "div.error-message-container h3",
} as const;

/**
 * Page Object для страницы логина.
 *
 * Инкапсулирует:
 *   - селекторы
 *   - действия (логин)
 *   - проверки (ошибки)
 *
 * Тесты работают только с методами, не зная деталей UI.
 */
export class LoginPage extends BasePage {
  /**
   * Локаторы, построенные на основе SELECTORS.
   *
   * Почему так:
   *   - локаторы создаются один раз при инициализации класса
   *   - методы используют готовые локаторы, а не строки
   *   - код становится чище и легче читается
   */
  username = this.page.getByRole(SELECTORS.username.role, { name: SELECTORS.username.name });
  password = this.page.getByRole(SELECTORS.password.role, { name: SELECTORS.password.name });
  loginBtn = this.page.getByRole(SELECTORS.loginBtn.role, { name: SELECTORS.loginBtn.name });
  errorMessage = this.page.locator(SELECTORS.errorMessage);

  /**
   * Универсальный метод логина.
   *
   * Что делает:
   *   - открывает страницу логина (BasePage.goto)
   *   - вводит логин/пароль
   *   - нажимает кнопку входа
   *
   * Почему важно:
   *   - тесты вызывают login(), не зная, где поля и кнопки
   *   - логика авторизации централизована
   */
  async login(user: string, pass: string) {
    await this.goto();          // открываем страницу логина
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }

  /**
   * Проверяет текст ошибки логина.
   *
   * Зачем нужен метод:
   *   - тесты пишут декларативно: loginPage.expectError("Epic sadface")
   *   - тесты не знают, где находится ошибка и как она выглядит
   *
   * Почему waitFor:
   *   - защищает от флаки (ошибка может появиться не сразу)
   */
  async expectError(text: string) {
    await this.errorMessage.waitFor();
    await expect(this.errorMessage).toContainText(text);
  }
}
