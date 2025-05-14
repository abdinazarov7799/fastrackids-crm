import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Student } from '../student/entities/student.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepo: Repository<Payment>,
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
  ) {}

  async create(dto: CreatePaymentDto) {
    const student = await this.studentRepo.findOne({ where: { id: dto.studentId } });
    if (!student) throw new NotFoundException('Student not found');

    const payment = this.paymentRepo.create({
      ...dto,
      student,
    });
    return this.paymentRepo.save(payment);
  }

  findAll() {
    return this.paymentRepo.find();
  }

  findOne(id: string) {
    return this.paymentRepo.findOne({ where: { id } });
  }

  async update(id: string, dto: UpdatePaymentDto) {
    await this.paymentRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const payment = await this.findOne(id);
    if (!payment) throw new NotFoundException('Payment not found');
    return this.paymentRepo.remove(payment);
  }
}
