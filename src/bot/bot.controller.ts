import { Controller, Inject } from '@nestjs/common';
import { CALLBACK_QUERY, Constants } from '../constants';
import TelegramBot from 'node-telegram-bot-api';
import { AdminService } from './admin/admin.service';
import { MammothService } from './mammoth/mammoth.service';
import { WorkerService } from './worker/worker.service';
import { ADMIN_KEYBOARDS_CALLBACKS_DATA } from './admin/admin-keyboards';

const { CITIES, CREATE_CITY, TO_MAIN_PAGE, DELETE_CITY } =
  ADMIN_KEYBOARDS_CALLBACKS_DATA;

const { START, WORKER } = Constants.COMMANDS;
const { ADMIN_USERNAME } = Constants;

@Controller('bot')
export class BotController {
  constructor(
    @Inject('Bot') private bot: TelegramBot,
    private readonly adminService: AdminService,
    private readonly mammothService: MammothService,
    private readonly workerService: WorkerService,
  ) {
    this.initializeBot();
  }

  private initializeBot(): void {
    this.bot.onText(START, (message: TelegramBot.Message) => {
      return this.mammothService.mainPage(message);
    });

    this.bot.onText(WORKER, (message: TelegramBot.Message) => {
      const username = message.chat.username;

      if (username === ADMIN_USERNAME) {
        return this.adminService.mainPage(message);
      }

      return this.workerService.mainPage(message);
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
