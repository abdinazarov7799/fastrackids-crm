import { Test, TestingModule } from '@nestjs/testing';
import { TeacherLogService } from './teacher-log.service';

describe('TeacherLogService', () => {
  let service: TeacherLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeacherLogService],
    }).compile();

    service = module.get<TeacherLogService>(TeacherLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
