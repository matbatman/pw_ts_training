import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";

/**
 * Расширенная версия стандартного Playwright test.
 *
 * Мы добавляем кастомную фикстуру `login`, которая:
 *   1) открывает страницу логина,
 *   2) выполняет авторизацию,
 *   3) дожидается загрузки InventoryPage,
 *   4) передаёт в тест уже готовый Page Object.
 *
 * Такой подход:
 *   - убирает дублирование логина в тестах,
 *   - делает тесты декларативными,
 *   - позволяет легко менять логику авторизации,
 *   - даёт автокомплит и строгую типизацию.
 */
export const test = base.extend({
  /**
   * Фикстура `login` — готовое состояние "пользователь залогинен".
   *
   * Аргументы:
   *   - page — стандартная Playwright-страница
   *   - use — callback, в который мы передаём результат фикстуры
   *
   * Возвращает:
   *   - экземпляр InventoryPage (Page Object после успешного логина)
   */
  app: async ({ page }, use) => {
    // Инициализируем Page Object логина
    const loginPage = new LoginPage(page);

    // Выполняем авторизацию
    await loginPage.login("standard_user", "secret_sauce");

    // После логина попадаем на страницу товаров
    const inventory = new InventoryPage(page);

    // Дожидаемся, пока страница полностью загрузится
    await inventory.isLoaded();

    // Передаём в тест готовый Page Object
    await use(inventory);
  },
});
