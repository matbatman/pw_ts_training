import { BaseClient } from './baseClient';

export class UserClient extends BaseClient {
  getUser(id: number) {
    return this.get(`/users/${id}`);
  }

  listUsers() {
    return this.get(`/users`);
  }
}
