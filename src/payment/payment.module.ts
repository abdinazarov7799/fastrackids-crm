import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { Payment } from "./entities/payment.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "../student/entities/student.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Payment,Student])],
  providers: [PaymentService],
  controllers: [PaymentController]
})
export class PaymentModule {}
