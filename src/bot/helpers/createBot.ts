import * as TelegramBot from 'node-telegram-bot-api';
import { Constants } from '../../constants';

export const createBot = () => {
  return new TelegramBot(Constants.BOT_TOKEN, { polling: true });
};
