import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Task {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column({ nullable: true })
  description: string;

  @ApiProperty()
  @Column()
  createdAt: Date;

  @ApiProperty()
  @Column()
  dueDate: Date;

  @ApiProperty({ enum: ['pending', 'in_progress', 'completed'] })
  @Column({ type: 'enum', enum: ['pending', 'in_progress', 'completed'], default: 'pending' })
  status: 'pending' | 'in_progress' | 'completed';

  @ApiProperty()
  @ManyToOne(() => User, { eager: true })
  assignedTo: User;
}
