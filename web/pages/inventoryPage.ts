import { BasePage } from "./basePage";
import { CartPage } from "./cartPage";


const SELECTORS = {
  title: ".title",
  cartLink: ".shopping_cart_link",
  addToCart: (id: string) => `[data-test="add-to-cart-${id}"]`,
};

/**
 * Page Object для страницы Inventory (страница товаров после логина).
 *
 * Здесь находятся:
 *   - селекторы страницы
 *   - действия с товарами
 *   - переходы в корзину
 *
 * Тесты не должны знать, как устроен UI — только вызывать методы.
 */
export class InventoryPage extends BasePage {
  /**
   * Локатор заголовка страницы.
   * Используется для проверки, что страница загрузилась.
   */
  title = this.page.locator(SELECTORS.title);

  /**
   * Проверяет, что страница полностью загрузилась.
   */
  async isLoaded() {
    await this.title.waitFor();
  }

  /**
   * Добавляет товар в корзину по имени.
   *
   * Пример:
   *   await inventory.addItemToCart("Sauce Labs Backpack");
   */
  async addItemToCart(name: string) {
    const id = name.toLowerCase().replace(/ /g, "-");
    await this.page.locator(SELECTORS.addToCart(id)).click();
  }

  /**
   * Переходит в корзину.
   *
   * Возвращает:
   *   - новый CartPage, чтобы тест мог работать с корзиной
   */
  async openCart() {
    await this.page.locator(SELECTORS.cartLink).click();
    return new CartPage(this.page);
  }
}
