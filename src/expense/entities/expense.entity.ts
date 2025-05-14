import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Expense {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ enum: ['daily', 'monthly', 'once'] })
  @Column({ type: 'enum', enum: ['daily', 'monthly', 'once'] })
  type: 'daily' | 'monthly' | 'once';

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  amount: number;

  @ApiProperty()
  @Column({ nullable: true })
  note: string;

  @ApiProperty()
  @Column()
  createdAt: Date;
}
