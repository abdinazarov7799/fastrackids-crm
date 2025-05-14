import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CallRequestService } from './call-request.service';
import { CreateCallRequestDto } from './dto/create-call-request.dto';
import { UpdateCallRequestDto } from './dto/update-call-request.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Call Requests')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('call-requests')
export class CallRequestController {
  constructor(private readonly callRequestService: CallRequestService) {}

  @Post()
  @Roles('admin', 'super_admin')
  create(@Body() dto: CreateCallRequestDto) {
    return this.callRequestService.create(dto);
  }

  @Get()
  @Roles('admin', 'super_admin')
  findAll() {
    return this.callRequestService.findAll();
  }

  @Get(':id')
  @Roles('admin', 'super_admin')
  findOne(@Param('id') id: string) {
    return this.callRequestService.findOne(id);
  }

  @Patch(':id')
  @Roles('admin', 'super_admin')
  update(@Param('id') id: string, @Body() dto: UpdateCallRequestDto) {
    return this.callRequestService.update(id, dto);
  }

  @Delete(':id')
  @Roles('admin', 'super_admin')
  remove(@Param('id') id: string) {
    return this.callRequestService.remove(id);
  }
}
