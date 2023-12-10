import { Inject, Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { BotModule } from '../bot.module';
import TelegramBot from 'node-telegram-bot-api';
import { City } from '../entities/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [BotModule],
  providers: [AdminService],
})
export class AdminModule {
  constructor(@Inject('Bot') private bot: TelegramBot) {}
}
