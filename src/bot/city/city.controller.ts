import { Controller, Inject } from '@nestjs/common';
import TelegramBot from 'node-telegram-bot-api';
import { CALLBACK_QUERY } from '../../constants';
import { ADMIN_KEYBOARDS_CALLBACKS_DATA } from '../admin/admin-keyboards';
import { CityService } from './city.service';

const { CITIES, CREATE_CITY, DELETE_CITY } = ADMIN_KEYBOARDS_CALLBACKS_DATA;

@Controller('city')
export class CityController {
  constructor(
    @Inject('Bot') private bot: TelegramBot,
    private readonly cityService: CityService,
  ) {
    this.bot.on(
      CALLBACK_QUERY,
      async (callbackQuery: TelegramBot.CallbackQuery) => {
        switch (callbackQuery.data) {
          case CITIES:
            return this.cityService.getCitiesMenu(callbackQuery);
          case CREATE_CITY:
            return this.cityService.sendMessageToCityCreate(callbackQuery);
          case DELETE_CITY:
            return this.cityService.sendMessageToCityDelete(callbackQuery);
          default:
            if (callbackQuery.data.startsWith('delete_')) {
              return await this.cityService.deleteCity(callbackQuery);
            }
        }
      },
    );
  }
}
