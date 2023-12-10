import { Inject, Injectable } from '@nestjs/common';
import TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class MammothService {
  constructor(@Inject('Bot') private bot: TelegramBot) {}

  async mainPage(message: TelegramBot.Message) {
    const chatId = message.chat.id;

    await this.bot.sendMessage(chatId, 'Мамонт');
  }
}
