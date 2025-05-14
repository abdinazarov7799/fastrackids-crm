import { PartialType } from '@nestjs/swagger';
import { CreateCallRequestDto } from './create-call-request.dto';

export class UpdateCallRequestDto extends PartialType(CreateCallRequestDto) {}
