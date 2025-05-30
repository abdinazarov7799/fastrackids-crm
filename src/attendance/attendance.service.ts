import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from './entities/attendance.entity';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { Student } from '../student/entities/student.entity';
import { User } from "../user/entities/user.entity";

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private attendanceRepo: Repository<Attendance>,
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(dto: CreateAttendanceDto) {
    const attendance = this.attendanceRepo.create({ ...dto });

    if (dto.studentId) {
      const student = await this.studentRepo.findOne({ where: { id: dto.studentId } });
      if (!student) throw new NotFoundException('Student not found');
      attendance.student = student;
    }

    if (dto.teacherId) {
      const teacher = await this.userRepo.findOne({ where: { id: dto.teacherId } });
      if (!teacher) throw new NotFoundException('Teacher (user) not found');
      attendance.teacher = teacher;
    }

    return this.attendanceRepo.save(attendance);
  }

  findAll() {
    return this.attendanceRepo.find();
  }

  findOne(id: string) {
    return this.attendanceRepo.findOne({ where: { id } });
  }

  async update(id: string, dto: UpdateAttendanceDto) {
    const attendance = await this.findOne(id);
    if (!attendance) throw new NotFoundException('Not found');
    Object.assign(attendance, dto);
    return this.attendanceRepo.save(attendance);
  }

  async remove(id: string) {
    const attendance = await this.findOne(id);
    if (!attendance) throw new NotFoundException('Not found');
    return this.attendanceRepo.remove(attendance);
  }
}
