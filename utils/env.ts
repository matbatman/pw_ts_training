import * as dotenv from 'dotenv';
dotenv.config();

export const env = {
  userApi: process.env.USER_API_URL!,
  orderApi: process.env.ORDER_API_URL!,
  authApi: process.env.AUTH_API_URL!,
  webUrl: process.env.WEB_URL!,
};
