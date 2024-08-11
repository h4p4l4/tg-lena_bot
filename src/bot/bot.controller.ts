import { Controller, Inject } from '@nestjs/common';
import { CALLBACK_QUERY, Constants } from '../constants';
import TelegramBot from 'node-telegram-bot-api';
import { AdminService } from './admin/admin.service';
import { ADMIN_KEYBOARDS_CALLBACKS_DATA } from './admin/admin-keyboards';

const { TO_MAIN_PAGE } = ADMIN_KEYBOARDS_CALLBACKS_DATA;

const { START } = Constants.COMMANDS;

@Controller('bot')
export class BotController {
  constructor(
    @Inject('Bot') private bot: TelegramBot,
    private readonly adminService: AdminService,
  ) {
    this.initializeBot();
  }

  private initializeBot(): void {
    this.bot.onText(START, (message: TelegramBot.Message) => {
      return this.adminService.mainPage(message);
    });

    this.bot.on(
      CALLBACK_QUERY,
      async (callbackQuery: TelegramBot.CallbackQuery) => {
        switch (callbackQuery.data) {
          case TO_MAIN_PAGE:
            return this.adminService.navigateToMainPage(callbackQuery);
          default:
            break;
        }
      },
    );
  }
}
