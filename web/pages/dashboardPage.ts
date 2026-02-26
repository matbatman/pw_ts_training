import { BasePage } from './basePage';

/**
 * Page Object для страницы дашборда.
 *
 * Этот класс описывает:
 *   - какие элементы есть на странице (локаторы)
 *   - какие действия может выполнять пользователь (методы)
 *
 * Он наследует BasePage, поэтому автоматически получает:
 *   - доступ к Playwright Page
 *   - базовый URL приложения
 *   - общие методы (open, locator)
 *
 * Такой подход делает все страницы единообразными и упрощает поддержку.
 */
export class DashboardPage extends BasePage {
  /**
   * Локаторы.
   *
   * Локаторы объявляются как свойства класса, чтобы:
   *   - не дублировать селекторы в методах
   *   - иметь декларативное описание структуры страницы
   *   - упростить навигацию по коду
   */
  welcomeText = this.locator('.welcome');
  logoutButton = this.locator('#logout');

  /**
   * Открывает страницу дашборда.
   *
   * Используем super.open(), чтобы:
   *   - не хардкодить полный URL
   *   - использовать baseUrl, переданный через фикстуру
   *   - сохранять единый стиль с API‑клиентами
   */
  async open() {
    await super.open('/dashboard');
  }

  /**
   * Возвращает текст приветствия.
   *
   * Такой метод делает тесты чище:
   *   вместо dashboardPage.welcomeText.textContent()
   *   тест пишет dashboardPage.getWelcomeMessage()
   */
  async getWelcomeMessage() {
    return this.welcomeText.textContent();
  }

  /**
   * Выполняет выход из аккаунта.
   *
   * В Page Object методы должны описывать действия пользователя,
   * а не технические детали (клики, локаторы).
   */
  async logout() {
    await this.logoutButton.click();
  }
}
