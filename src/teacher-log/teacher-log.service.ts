import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeacherLog } from './entities/teacher-log.entity';
import { CreateTeacherLogDto } from './dto/create-teacher-log.dto';
import { UpdateTeacherLogDto } from './dto/update-teacher-log.dto';
import { User } from '../user/entities/user.entity';

@Injectable()
export class TeacherLogService {
  constructor(
    @InjectRepository(TeacherLog)
    private logRepo: Repository<TeacherLog>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(dto: CreateTeacherLogDto) {
    const teacher = await this.userRepo.findOne({ where: { id: dto.teacherId } });
    if (!teacher) throw new NotFoundException('Teacher not found');

    const log = this.logRepo.create({ ...dto, teacher });
    return this.logRepo.save(log);
  }

  findAll() {
    return this.logRepo.find();
  }

  findOne(id: string) {
    return this.logRepo.findOne({ where: { id } });
  }

  async update(id: string, dto: UpdateTeacherLogDto) {
    const log = await this.findOne(id);
    if (!log) throw new NotFoundException('Not found');
    Object.assign(log, dto);
    return this.logRepo.save(log);
  }

  async remove(id: string) {
    const log = await this.findOne(id);
    if (!log) throw new NotFoundException('Not found');
    return this.logRepo.remove(log);
  }
}
