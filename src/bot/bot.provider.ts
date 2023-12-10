import { Provider } from '@nestjs/common';
import { createBot } from './helpers/createBot';

export const BotProvider: Provider = {
  provide: 'Bot',
  useFactory: () => {
    return createBot();
  },
};
