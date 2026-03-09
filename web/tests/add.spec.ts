import { test } from "../fixtures/auth";
import { CartPage } from "../pages/cartPage";

/**
 * Сценарий: пользователь может добавить товар в корзину.
 *
 * Что проверяем:
 *   - добавление товара на InventoryPage
 *   - переход в корзину через UI
 *   - наличие товара в корзине
 */
test("user can add item to cart", async ({ app }) => {

  // 1. Добавляем товар на странице Inventory
  await app.addItemToCart("Sauce Labs Backpack");

  // 2. Переходим в корзину (InventoryPage → CartPage)
  const cart = await app.openCart();

  // 3. Проверяем, что товар появился в корзине
  await cart.expectItem("Sauce Labs Backpack");
});

/**
 * Сценарий: можно открыть корзину напрямую по URL.
 *
 * Зачем это нужно:
 *   - быстрые тесты без кликов
 *   - проверка состояния корзины "как есть"
 *   - демонстрация прямой навигации после логина
 */
test("open cart directly", async ({ app }) => {
  // Создаём CartPage вручную, используя текущую авторизованную страницу
  const cart = new CartPage(app.page);

  // Открываем корзину напрямую (без кликов)
  await cart.open();

  // Проверяем, что корзина пустая
  await cart.expectEmpty();
});
