import * as dotenv from 'dotenv';
dotenv.config();

export const env = {
  userApi: process.env.USER_API_URL!,
};
