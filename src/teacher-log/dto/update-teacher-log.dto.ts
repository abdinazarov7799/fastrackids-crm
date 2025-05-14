import { PartialType } from '@nestjs/swagger';
import { CreateTeacherLogDto } from './create-teacher-log.dto';

export class UpdateTeacherLogDto extends PartialType(CreateTeacherLogDto) {}
