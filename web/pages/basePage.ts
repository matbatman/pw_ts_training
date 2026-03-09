import { Page } from "@playwright/test";
import { env } from "../../utils/env";

/**
 * Базовый класс для всех Page Object.
 *
 * Зачем он нужен:
 *   - хранит ссылку на Playwright Page
 *   - содержит общие методы, которые нужны на всех страницах
 *   - позволяет избежать дублирования кода
 *   - делает архитектуру чище и масштабируемее
 *
 * Любая страница (LoginPage, InventoryPage и т.д.)
 * наследует BasePage и автоматически получает доступ к:
 *   this.page — Playwright Page
 *   this.goto() — переход на URL с учётом базового адреса
 */
export class BasePage {
  constructor(public page: Page) {}

  /**
   * Универсальный метод перехода на страницу.
   *
   * Вместо того чтобы в каждом Page Object писать:
   *   page.goto("https://www.saucedemo.com/inventory.html")
   *
   * мы пишем:
   *   this.goto("inventory.html")
   *
   * Метод сам подставляет базовый URL из env:
   *   env.webBaseUrl + path
   *
   * Это:
   *   - убирает хардкод URL‑ов
   *   - позволяет легко менять окружения (dev/stage/prod)
   *   - делает тесты чище и стабильнее
   */
  async goto(path: string = "") {
    await this.page.goto(env.webBaseUrl + path);
  }
}
