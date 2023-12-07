import { Module } from '@nestjs/common';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { City } from './entities/city.entity';
import { Whore } from './entities/whore.entity';
import { Image } from './entities/image.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123qwerty',
      database: 'lena-bot',
      entities: [Card, City, Whore, Image],
      synchronize: true,
    }),
  ],
  controllers: [BotController],
  providers: [BotService],
})
export class BotModule {}
