import { IsBoolean, IsDateString, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAttendanceDto {
  @ApiProperty()
  @IsUUID()
  studentId: string;

  @ApiProperty()
  @IsDateString()
  date: string;

  @ApiProperty()
  @IsBoolean()
  present: boolean;

  @ApiProperty({ enum: ['valid', 'invalid', 'none'] })
  @IsEnum(['valid', 'invalid', 'none'])
  reason: 'valid' | 'invalid' | 'none';

  @ApiProperty({ required: false })
  @IsOptional()
  reasonDescription?: string;
}
