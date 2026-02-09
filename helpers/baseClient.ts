// helpers/api/baseClient.ts
import { APIRequestContext, APIResponse } from '@playwright/test';

export class BaseClient {
  protected baseUrl: string;

  constructor(protected request: APIRequestContext) {
    this.baseUrl = process.env.BASE_URL!;
  }

  protected get(path: string, options: any = {}): Promise<APIResponse> {
    return this.request.get(`${this.baseUrl}${path}`, options);
  }

  protected post(path: string, data?: any, options: any = {}): Promise<APIResponse> {
    return this.request.post(`${this.baseUrl}${path}`, { data, ...options });
  }

  protected put(path: string, data?: any, options: any = {}): Promise<APIResponse> {
    return this.request.put(`${this.baseUrl}${path}`, { data, ...options });
  }

  protected delete(path: string, options: any = {}): Promise<APIResponse> {
    return this.request.delete(`${this.baseUrl}${path}`, options);
  }
}
