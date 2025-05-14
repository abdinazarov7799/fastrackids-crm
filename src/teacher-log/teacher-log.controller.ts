import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TeacherLogService } from './teacher-log.service';
import { CreateTeacherLogDto } from './dto/create-teacher-log.dto';
import { UpdateTeacherLogDto } from './dto/update-teacher-log.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Teacher Logs')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('teacher-logs')
export class TeacherLogController {
  constructor(private readonly teacherLogService: TeacherLogService) {}

  @Post()
  @Roles('admin', 'super_admin')
  create(@Body() dto: CreateTeacherLogDto) {
    return this.teacherLogService.create(dto);
  }

  @Get()
  findAll() {
    return this.teacherLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherLogService.findOne(id);
  }

  @Patch(':id')
  @Roles('admin', 'super_admin')
  update(@Param('id') id: string, @Body() dto: UpdateTeacherLogDto) {
    return this.teacherLogService.update(id, dto);
  }

  @Delete(':id')
  @Roles('admin', 'super_admin')
  remove(@Param('id') id: string) {
    return this.teacherLogService.remove(id);
  }
}
