import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Student {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  firstName: string;

  @ApiProperty()
  @Column()
  lastName: string;

  @ApiProperty()
  @Column()
  age: number;

  @ApiProperty()
  @Column({ unique: true })
  phone: string;

  @ApiProperty()
  @Column()
  parentName: string;

  @ApiProperty()
  @Column()
  address: string;

  @ApiProperty()
  @Column()
  enrolledDate: Date;
}
