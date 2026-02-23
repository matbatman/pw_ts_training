import { APIRequestContext } from '@playwright/test';

export class BaseClient {
  constructor(
    protected request: APIRequestContext,
    protected base: string
  ) {}

  get(path: string) {
    return this.request.get(this.base + path);
  }

  post(path: string, data?: any) {
    return this.request.post(this.base + path, { data });
  }

  put(path: string, data?: any) {
    return this.request.put(this.base + path, { data });
  }

  delete(path: string) {
    return this.request.delete(this.base + path);
  }
}
