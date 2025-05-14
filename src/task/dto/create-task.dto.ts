import { IsNotEmpty, IsOptional, IsString, IsDateString, IsEnum, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsDateString()
  createdAt: string;

  @ApiProperty()
  @IsDateString()
  dueDate: string;

  @ApiProperty({ enum: ['pending', 'in_progress', 'completed'], default: 'pending' })
  @IsEnum(['pending', 'in_progress', 'completed'])
  status: 'pending' | 'in_progress' | 'completed';

  @ApiProperty()
  @IsUUID()
  assignedToId: string;
}
