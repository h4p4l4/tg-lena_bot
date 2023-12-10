import { Module } from '@nestjs/common';
import { WhoreController } from './whore.controller';
import { WhoreService } from './whore.service';
import { BotModule } from '../bot.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Whore } from '../entities/whore.entity';

@Module({
  imports: [BotModule, TypeOrmModule.forFeature([Whore])],
  controllers: [WhoreController],
  providers: [WhoreService],
})
export class WhoreModule {}
