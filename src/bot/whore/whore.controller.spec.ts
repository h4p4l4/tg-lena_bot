import { Test, TestingModule } from '@nestjs/testing';
import { WhoreController } from './whore.controller';

describe('WhoresController', () => {
  let controller: WhoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhoreController],
    }).compile();

    controller = module.get<WhoreController>(WhoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
