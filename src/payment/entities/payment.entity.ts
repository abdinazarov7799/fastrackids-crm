import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Payment {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  amount: number;

  @ApiProperty({ enum: ['cash', 'card', 'transfer', 'terminal'] })
  @Column({ type: 'enum', enum: ['cash', 'card', 'transfer', 'terminal'] })
  paymentType: 'cash' | 'card' | 'transfer' | 'terminal';

  @ApiProperty()
  @Column()
  paidAt: Date;

  @ApiProperty()
  @Column()
  paidBy: string;

  @ApiProperty()
  @ManyToOne(() => Student, { eager: true })
  student: Student;
}
