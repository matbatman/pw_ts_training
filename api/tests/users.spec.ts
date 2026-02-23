import { test, expect } from '../fixtures/apiFixtures';

/**
 * Пример API‑теста, использующего фикстуру userApi.
 *
 * Фикстура автоматически создаёт UserClient
 * и передаёт его в тест через параметры.
 *
 * Такой подход делает тесты:
 *   - чище (нет ручного создания клиентов)
 *   - изолированными (каждый тест получает свой экземпляр)
 *   - читаемыми (видно, какие зависимости нужны тесту)
 */
test('get user by id', async ({ userApi }) => {
  // Выполняем запрос к API
  const res = await userApi.getUser(1);

  // Парсим JSON‑ответ
  const body = await res.json();

  // Проверяем статус ответа
  expect(res.status()).toBe(200);

  // Проверяем, что в ответе есть поле id
  expect(body).toHaveProperty('id');
});
