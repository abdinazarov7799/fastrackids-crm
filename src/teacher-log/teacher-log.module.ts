import { Module } from '@nestjs/common';
import { TeacherLogService } from './teacher-log.service';
import { TeacherLogController } from './teacher-log.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TeacherLog } from "./entities/teacher-log.entity";
import { User } from "../user/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([TeacherLog, User])],
  providers: [TeacherLogService],
  controllers: [TeacherLogController]
})
export class TeacherLogModule {}
