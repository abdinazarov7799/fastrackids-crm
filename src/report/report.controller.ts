import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ReportService } from './report.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Reports')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('monthly-income')
  @Roles('admin', 'super_admin', 'accountant')
  getIncome(@Query('year') year: number, @Query('month') month: number) {
    return this.reportService.getMonthlyIncome(year, month);
  }

  @Get('student-count')
  @Roles('admin', 'super_admin')
  getStudentCount() {
    return this.reportService.getStudentCount();
  }

  @Get('attendance-stats')
  @Roles('admin', 'super_admin')
  getAttendanceStats(@Query('year') year: number, @Query('month') month: number) {
    return this.reportService.getAttendanceStats(month, year);
  }

  @Get('teacher-hours')
  @Roles('admin', 'super_admin')
  getTeacherHours() {
    return this.reportService.getTeacherHours();
  }
}
