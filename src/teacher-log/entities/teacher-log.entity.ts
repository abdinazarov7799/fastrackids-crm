import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class TeacherLog {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ type: 'date' })
  date: string;

  @ApiProperty()
  @Column({ type: 'time' })
  checkIn: string;

  @ApiProperty()
  @Column({ type: 'time' })
  checkOut: string;

  @ApiProperty()
  @Column()
  lateMinutes: number;

  @ApiProperty()
  @Column()
  lessonsTaught: number;

  @ApiProperty()
  @Column()
  extraLessons: number;

  @ApiProperty()
  @ManyToOne(() => User, { eager: true })
  teacher: User;
}
