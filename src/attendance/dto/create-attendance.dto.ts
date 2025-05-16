import { IsDateString, IsOptional, IsUUID, IsBoolean, IsString, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAttendanceDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  studentId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  teacherId?: string;

  @ApiProperty()
  @IsDateString()
  date: string;

  @ApiProperty()
  @IsBoolean()
  present: boolean;

  @ApiProperty({ enum: ['none', 'valid', 'invalid'] })
  @IsIn(['none', 'valid', 'invalid'])
  reason: 'none' | 'valid' | 'invalid';

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  reasonDescription?: string;
}
