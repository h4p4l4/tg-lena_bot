import * as dotenv from 'dotenv';
dotenv.config();

const {
  ADMIN_USERNAME,
  BOT_TOKEN,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
} = process.env;

export const CALLBACK_QUERY = 'callback_query';

export const Constants = {
  BOT_TOKEN,
  ADMIN_USERNAME,
  DATABASE: {
    NAME: DB_NAME,
    HOST: DB_HOST,
    PORT: DB_PORT,
    USERNAME: DB_USERNAME,
    PASSWORD: DB_PASSWORD,
  },
  COMMANDS: {
    START: /\/start/,
    WORKER: /\/worker/,
  },
};
