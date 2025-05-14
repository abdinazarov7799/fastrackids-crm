import { Test, TestingModule } from '@nestjs/testing';
import { TeacherLogController } from './teacher-log.controller';

describe('TeacherLogController', () => {
  let controller: TeacherLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeacherLogController],
    }).compile();

    controller = module.get<TeacherLogController>(TeacherLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
