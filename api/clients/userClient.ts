import { BaseClient } from './baseClient';

/**
 * Клиент для работы с пользовательским API.
 *
 * Наследуется от BaseClient и использует его методы (get, post, put, delete),
 * добавляя более удобные и читаемые методы, специфичные для домена "users".
 *
 * Такой подход позволяет:
 *  - изолировать логику запросов
 *  - скрыть детали URL‑ов
 *  - сделать тесты чище и понятнее
 */
export class UserClient extends BaseClient {
  /**
   * Получить пользователя по ID.
   * @param id — идентификатор пользователя
   */
  getUser(id: number) {
    return this.get(`/users/${id}`);
  }

  /**
   * Получить список всех пользователей.
   */
  listUsers() {
    return this.get(`/users`);
  }
}
