import { IsString, IsNotEmpty, IsNumber, IsDateString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCallRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsNumber()
  childAge: number;

  @ApiProperty()
  @IsString()
  courseType: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  suggestion?: string;

  @ApiProperty()
  @IsDateString()
  createdAt: string;
}
