import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TeacherLog } from "../teacher-log/entities/teacher-log.entity";
import { Student } from "../student/entities/student.entity";
import { Attendance } from "../attendance/entities/attendance.entity";
import { Payment } from "../payment/entities/payment.entity";

@Module({
  imports: [TypeOrmModule.forFeature([TeacherLog, Student, Attendance,Payment])],
  controllers: [ReportController],
  providers: [ReportService]
})
export class ReportModule {}
