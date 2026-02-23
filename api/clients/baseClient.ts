import { APIRequestContext } from '@playwright/test';

/**
 * Базовый HTTP‑клиент для API‑тестов.
 * 
 * Содержит общие методы для работы с REST‑эндпоинтами:
 *  - GET
 *  - POST
 *  - PUT
 *  - DELETE
 * 
 * Каждый конкретный клиент (UserClient, AuthClient и т.д.)
 * наследуется от BaseClient и использует эти методы.
 */
export class BaseClient {
  /**
   * @param request — Playwright APIRequestContext (встроенный HTTP‑клиент)
   * @param base — базовый URL сервиса, например https://api.example.com
   */
  constructor(
    protected request: APIRequestContext,
    protected base: string
  ) {}

  /**
   * Выполняет GET‑запрос.
   * @param path — относительный путь, например "/users/1"
   */
  get(path: string) {
    return this.request.get(this.base + path);
  }

  /**
   * Выполняет POST‑запрос.
   * @param path — относительный путь
   * @param data — тело запроса (JSON)
   */
  post(path: string, data?: any) {
    return this.request.post(this.base + path, { data });
  }

  /**
   * Выполняет PUT‑запрос.
   * @param path — относительный путь
   * @param data — тело запроса (JSON)
   */
  put(path: string, data?: any) {
    return this.request.put(this.base + path, { data });
  }

  /**
   * Выполняет DELETE‑запрос.
   * @param path — относительный путь
   */
  delete(path: string) {
    return this.request.delete(this.base + path);
  }
}
