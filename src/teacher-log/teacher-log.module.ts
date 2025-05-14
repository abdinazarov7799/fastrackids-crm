import { Module } from '@nestjs/common';
import { TeacherLogService } from './teacher-log.service';
import { TeacherLogController } from './teacher-log.controller';

@Module({
  providers: [TeacherLogService],
  controllers: [TeacherLogController]
})
export class TeacherLogModule {}
