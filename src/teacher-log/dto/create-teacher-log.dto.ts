import { IsDateString, IsString, IsNumber, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeacherLogDto {
  @ApiProperty()
  @IsUUID()
  teacherId: string;

  @ApiProperty()
  @IsDateString()
  date: string;

  @ApiProperty()
  @IsString()
  checkIn: string;

  @ApiProperty()
  @IsString()
  checkOut: string;

  @ApiProperty()
  @IsNumber()
  lateMinutes: number;

  @ApiProperty()
  @IsNumber()
  lessonsTaught: number;

  @ApiProperty()
  @IsNumber()
  extraLessons: number;
}
