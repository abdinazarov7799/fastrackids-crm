import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Payment } from '../payment/entities/payment.entity';
import { Student } from '../student/entities/student.entity';
import { Attendance } from '../attendance/entities/attendance.entity';
import { TeacherLog } from '../teacher-log/entities/teacher-log.entity';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepo: Repository<Payment>,
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
    @InjectRepository(Attendance)
    private attendanceRepo: Repository<Attendance>,
    @InjectRepository(TeacherLog)
    private teacherLogRepo: Repository<TeacherLog>,
  ) {}

  async getMonthlyIncome(year: number, month: number) {
    const start = new Date(year, month - 1, 1);
    const end = new Date(year, month, 0);
    const payments = await this.paymentRepo.find({
      where: {
        paidAt: Between(start, end),
      },
    });
    const total = payments.reduce((sum, p) => sum + p.amount, 0);
    return { total };
  }

  async getStudentCount() {
    const count = await this.studentRepo.count();
    return { totalStudents: count };
  }

  async getAttendanceStats(month: number, year: number) {
    const start = new Date(year, month - 1, 1);
    const end = new Date(year, month, 0);
    const attendance = await this.attendanceRepo.find({
      where: {
        date: Between(start.toISOString(), end.toISOString()),
      },
    });
    const present = attendance.filter(a => a.present).length;
    const total = attendance.length;
    const percentage = total > 0 ? (present / total) * 100 : 0;
    return { present, total, percentage };
  }

  async getTeacherHours() {
    const logs = await this.teacherLogRepo.find();
    const total = logs.reduce((sum, l) => sum + l.lessonsTaught + l.extraLessons, 0);
    return { totalLessons: total };
  }
}
