import { Test, TestingModule } from '@nestjs/testing';
import { CallRequestController } from './call-request.controller';

describe('CallRequestController', () => {
  let controller: CallRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CallRequestController],
    }).compile();

    controller = module.get<CallRequestController>(CallRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
