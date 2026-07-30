import { Test, TestingModule } from '@nestjs/testing';
import { CarVersionsService } from './versions.service';

describe('CarVersionsService', () => {
  let service: CarVersionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarVersionsService],
    }).compile();

    service = module.get<CarVersionsService>(CarVersionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
