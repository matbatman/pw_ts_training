import { Page, Locator } from '@playwright/test';

/**
 * Базовый класс для всех UI‑страниц.
 *
 * Его задача — дать единый фундамент для всех Page Object:
 *   - хранить ссылку на Playwright Page
 *   - знать базовый URL приложения
 *   - предоставлять общие методы (open, locator, ожидания и т.п.)
 *
 * Такой подход делает архитектуру единообразной:
 *   - API‑клиенты используют baseUrl → BaseClient
 *   - UI‑страницы используют baseUrl → BasePage
 *
 * Это позволяет тестам и страницам не думать о том,
 * откуда берётся URL — этим управляют фикстуры.
 */
export class BasePage {
  constructor(
    /** Экземпляр Playwright Page — браузерная вкладка */
    protected page: Page,

    /** Базовый URL приложения, например https://my-app.com */
    protected baseUrl: string
  ) {}

  /**
   * Открывает страницу по относительному пути.
   *
   * Пример:
   *   await open('/login')
   *   → откроет https://my-app.com/login
   *
   * Это аналогично тому, как BaseClient делает запросы:
   *   this.request.get(this.base + path)
   */
  async open(path: string) {
    await this.page.goto(this.baseUrl + path);
  }

  /**
   * Упрощённый доступ к локаторам.
   *
   * Вместо:
   *   this.page.locator('#username')
   *
   * Можно писать:
   *   this.locator('#username')
   *
   * Это делает код страниц чище и короче.
   */
  locator(selector: string): Locator {
    return this.page.locator(selector);
  }
}
