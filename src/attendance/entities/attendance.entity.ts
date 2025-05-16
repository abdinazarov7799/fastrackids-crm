import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { User } from '../../user/entities/user.entity';
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
  @Column()
  present: boolean;

  @ApiProperty()
  @Column({ default: 'none' })
  reason: 'none' | 'valid' | 'invalid';

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  reasonDescription?: string;

  @ManyToOne(() => Student, { nullable: true })
  student: Student;

  @ManyToOne(() => User, { nullable: true })
  teacher: User;
}
