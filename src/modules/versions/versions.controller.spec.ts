import { Test, TestingModule } from '@nestjs/testing';
import { CarVersionsController } from './versions.controller';

describe('CarVersionsController', () => {
  let controller: CarVersionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarVersionsController],
    }).compile();

    controller = module.get<CarVersionsController>(CarVersionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
