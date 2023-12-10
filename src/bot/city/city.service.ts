import { Inject, Injectable } from '@nestjs/common';
import TelegramBot from 'node-telegram-bot-api';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from '../entities/city.entity';
import { Repository } from 'typeorm';
import {
  citiesKeyboard,
  emptyCitiesKeyboard,
  toMainKeyboard,
} from '../admin/admin-keyboards';
import { generateCitiesListMessage } from '../helpers/generateCitiesListMessage';

@Injectable()
export class CityService {
  private waitCityNameUsers = {};

  constructor(
    @Inject('Bot') private bot: TelegramBot,
    @InjectRepository(City) private citiesRepository: Repository<City>,
  ) {
    this.bot.on('message', async (message) => {
      if (this.waitCityNameUsers[message.chat.id]) {
        const cityName = message.text;

        await this.createCity(cityName);

        delete this.waitCityNameUsers[message.chat.id];

        await this.bot.sendMessage(
          message.chat.id,
          `Создан новый город ${cityName}`,
          toMainKeyboard,
        );
      }
    });
  }

  async getAllCities() {
    return await this.citiesRepository.find();
  }

  async getCitiesMenu(callbackQuery: TelegramBot.CallbackQuery) {
    const cities: City[] = await this.getAllCities();

    const chatId = callbackQuery.message.chat.id;
    const messageId = callbackQuery.message.message_id;

    if (cities.length === 0) {
      return this.bot.editMessageText('Городов нету', {
        chat_id: chatId,
        message_id: messageId,
        ...emptyCitiesKeyboard,
      });
    } else {
      const citiesListMessage = generateCitiesListMessage(cities);

      return this.bot.editMessageText(citiesListMessage, {
        chat_id: chatId,
        message_id: messageId,
        ...citiesKeyboard,
      });
    }
  }

  async sendMessageToCityCreate(query: TelegramBot.CallbackQuery) {
    this.waitCityNameUsers[query.message.chat.id] = true;

    const chatId = query.message.chat.id;
    const messageId = query.message.message_id;

    await this.bot.editMessageText('Введите название нового города', {
      chat_id: chatId,
      message_id: messageId,
    });
  }

  async createCity(cityName: string) {
    const newCity = new City();
    newCity.name = cityName;
    await this.citiesRepository.save(newCity);
  }

  async sendMessageToCityDelete(query: TelegramBot.CallbackQuery) {
    const cities: City[] = await this.getAllCities();

    const chatId = query.message.chat.id;
    const messageId = query.message.message_id;

    const citiesButtons = cities.map((city: City) => [
      { text: city.name, callback_data: `delete_${city.id}` },
    ]);

    const keyboard = {
      reply_markup: {
        inline_keyboard: citiesButtons,
      },
    };

    await this.bot.editMessageText('Выберите город для удаления:', {
      chat_id: chatId,
      message_id: messageId,
      ...keyboard,
    });
  }

  async deleteCity(callbackQuery: TelegramBot.CallbackQuery) {
    const cityId = Number(callbackQuery.data.replace('delete_', ''));

    const city = await this.citiesRepository.findOne({
      where: {
        id: cityId,
      },
    });

    const chatId = callbackQuery.message.chat.id;
    const messageId = callbackQuery.message.message_id;

    if (city) {
      await this.citiesRepository.remove(city);

      return this.bot.editMessageText(`Город ${city.name} успешно удалён`, {
        chat_id: chatId,
        message_id: messageId,
        ...toMainKeyboard,
      });
    }
  }
}
