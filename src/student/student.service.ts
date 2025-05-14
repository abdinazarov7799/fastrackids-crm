import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
  ) {}

  create(dto: CreateStudentDto) {
    const student = this.studentRepo.create(dto);
    return this.studentRepo.save(student);
  }

  findAll() {
    return this.studentRepo.find();
  }

  findOne(id: string) {
    return this.studentRepo.findOne({ where: { id } });
  }

  async update(id: string, dto: UpdateStudentDto) {
    await this.studentRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const student = await this.findOne(id);
    if (!student) throw new NotFoundException('Student not found');
    return this.studentRepo.remove(student);
  }
}
