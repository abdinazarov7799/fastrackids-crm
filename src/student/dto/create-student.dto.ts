import { IsNotEmpty, IsString, IsInt, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsInt()
  age: number;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  parentName: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsDateString()
  enrolledDate: string;
}
