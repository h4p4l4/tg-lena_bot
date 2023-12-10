import { Module } from '@nestjs/common';
import { MammothService } from './mammoth.service';
import { BotModule } from '../bot.module';

@Module({
  imports: [BotModule],
  providers: [MammothService],
})
export class MammothModule {}
