import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { Constants } from '../constants';

@Injectable()
export class BotService {
  private readonly bot: TelegramBot;

  constructor() {
    this.bot = new TelegramBot(Constants.BOT_TOKEN, { polling: true });
    this.initializeBot();
  }

  private initializeBot(): void {
    this.bot.on('message', (message) => {
      const chatId = message.chat.id;

      console.log('--->message<---', message);

      this.bot.sendMessage(chatId, 'Hello, World!').then();
    });
  }
}
