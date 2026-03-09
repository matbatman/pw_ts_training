import { BasePage } from "./basePage";
import { expect } from "@playwright/test";


const SELECTORS = {
  item: ".cart_item",
  title: ".title",
};

export class CartPage extends BasePage {
  /**
   * Открывает страницу корзины напрямую.
   */
  async open() {
    await this.goto("cart.html");
  }

  /**
   * Проверяет, что указанный товар есть в корзине.
   */
  async expectItem(name: string) {
    await expect(this.page.locator(SELECTORS.item)).toContainText(name);
  }

  /**
   * Проверяет, что корзина пустая.
   */
  async expectEmpty() {
    await expect(this.page.locator(SELECTORS.item)).toHaveCount(0);
  }
}
