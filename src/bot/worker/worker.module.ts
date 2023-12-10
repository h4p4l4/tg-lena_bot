import { Module } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { BotModule } from '../bot.module';

@Module({
  imports: [BotModule],
  providers: [WorkerService],
})
export class WorkerModule {}
