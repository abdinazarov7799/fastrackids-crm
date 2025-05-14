import { IsUUID, IsNumber, IsEnum, IsString, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
  @ApiProperty()
  @IsUUID()
  studentId: string;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty({ enum: ['cash', 'card', 'transfer', 'terminal'] })
  @IsEnum(['cash', 'card', 'transfer', 'terminal'])
  paymentType: 'cash' | 'card' | 'transfer' | 'terminal';

  @ApiProperty()
  @IsDateString()
  paidAt: string;

  @ApiProperty()
  @IsString()
  paidBy: string;
}
