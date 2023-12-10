import { Test, TestingModule } from '@nestjs/testing';
import { MammothService } from './mammoth.service';

describe('MammothService', () => {
  let service: MammothService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MammothService],
    }).compile();

    service = module.get<MammothService>(MammothService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
