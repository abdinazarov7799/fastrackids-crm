import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CallRequest } from './entities/call-request.entity';
import { CreateCallRequestDto } from './dto/create-call-request.dto';
import { UpdateCallRequestDto } from './dto/update-call-request.dto';

@Injectable()
export class CallRequestService {
  constructor(
    @InjectRepository(CallRequest)
    private callRepo: Repository<CallRequest>,
  ) {}

  create(dto: CreateCallRequestDto) {
    const entity = this.callRepo.create(dto);
    return this.callRepo.save(entity);
  }

  findAll() {
    return this.callRepo.find({ order: { createdAt: 'DESC' } });
  }

  findOne(id: string) {
    return this.callRepo.findOne({ where: { id } });
  }

  async update(id: string, dto: UpdateCallRequestDto) {
    await this.callRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const req = await this.findOne(id);
    if (!req) throw new NotFoundException('Call request not found');
    return this.callRepo.remove(req);
  }
}
