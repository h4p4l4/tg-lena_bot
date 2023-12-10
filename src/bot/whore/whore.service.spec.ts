import { Test, TestingModule } from '@nestjs/testing';
import { WhoreService } from './whore.service';

describe('WhoresService', () => {
  let service: WhoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhoreService],
    }).compile();

    service = module.get<WhoreService>(WhoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
