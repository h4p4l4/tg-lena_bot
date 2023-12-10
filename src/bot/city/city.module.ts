import { Inject, Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { BotModule } from '../bot.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from '../entities/city.entity';
import TelegramBot from 'node-telegram-bot-api';

@Module({
  imports: [BotModule, TypeOrmModule.forFeature([City])],
  providers: [CityService],
  controllers: [CityController],
})
export class CityModule {
  constructor(@Inject('Bot') private bot: TelegramBot) {}
}
