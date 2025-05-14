import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class CallRequest {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  phone: string;

  @ApiProperty()
  @Column()
  childAge: number;

  @ApiProperty()
  @Column()
  courseType: string;

  @ApiProperty()
  @Column({ nullable: true })
  suggestion: string;

  @ApiProperty()
  @Column()
  createdAt: Date;
}
