// import { APIRequestContext } from '@playwright/test';

// export class ApiClient {
//   constructor(private request: APIRequestContext) {}

//   async getUsers(page = 1) {
//     return this.request.get(`https://reqres.in/api/users?page=${page}`);
//   }

//   async createUser(data: any) {
//     return this.request.post(`https://reqres.in/api/users`, { data });
//   }
// }

import { BaseClient } from './baseClient';

export class UsersClient extends BaseClient {
  getUsers(page = 1) {
    return this.get(`/users?page=${page}`);
  }

  getUser(id: number) {
    return this.get(`/users/${id}`);
  }

  createUser(data: { name: string; job: string }) {
    return this.post('/users', data);
  }

  updateUser(id: number, data: any) {
    return this.put(`/users/${id}`, data);
  }

  deleteUser(id: number) {
    return this.delete(`/users/${id}`);
  }
}

