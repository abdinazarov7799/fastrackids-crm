import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Attendance {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ type: 'date' })
  date: string;

  @ApiProperty()
  @Column({ default: false })
  present: boolean;

  @ApiProperty({ enum: ['valid', 'invalid', 'none'] })
  @Column({ type: 'enum', enum: ['valid', 'invalid', 'none'], default: 'none' })
  reason: 'valid' | 'invalid' | 'none';

  @ApiProperty()
  @Column({ nullable: true })
  reasonDescription: string;

  @ApiProperty()
  @ManyToOne(() => Student, { eager: true })
  student: Student;
}
