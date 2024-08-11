import { Module } from '@nestjs/common';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { City } from './entities/city.entity';
import { Person } from './entities/person.entity';
import { Image } from './entities/image.entity';
import { Constants } from '../constants';
import { BotProvider } from './bot.provider';
import { AdminService } from './admin/admin.service';
import { WorkerService } from './worker/worker.service';
import { CityService } from './city/city.service';
import { CityController } from './city/city.controller';

const { NAME, PORT, HOST, USERNAME, PASSWORD } = Constants.DATABASE;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: HOST,
      port: Number(PORT),
      username: USERNAME,
      password: PASSWORD,
      database: NAME,
      entities: [Card, City, Person, Image],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([City]),
  ],
  controllers: [BotController],
  providers: [
    BotService,
    BotProvider,
    AdminService,
    WorkerService,
    CityService,
    CityController,
  ],
  exports: ['Bot'],
})
export class BotModule {}
