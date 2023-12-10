import { Inject, Injectable } from '@nestjs/common';
import TelegramBot from 'node-telegram-bot-api';
import { mainPageKeyboard } from './admin-keyboards';

@Injectable()
export class AdminService {
  constructor(@Inject('Bot') private bot: TelegramBot) {}

  async mainPage(message: TelegramBot.Message) {
    const chatId = message.chat.id;

    await this.bot.sendMessage(chatId, 'Бугор', mainPageKeyboard);
  }

  async navigateToMainPage(callbackQuery: TelegramBot.CallbackQuery) {
    const chatId = callbackQuery.message.chat.id;
    const messageId = callbackQuery.message.message_id;

    await this.bot.editMessageText('Бугор', {
      chat_id: chatId,
      message_id: messageId,
      ...mainPageKeyboard,
    });
  }
}
