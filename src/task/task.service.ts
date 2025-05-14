import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { User } from '../user/entities/user.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(dto: CreateTaskDto) {
    const user = await this.userRepo.findOne({ where: { id: dto.assignedToId } });
    if (!user) throw new NotFoundException('User not found');

    const task = this.taskRepo.create({
      ...dto,
      assignedTo: user,
    });
    return this.taskRepo.save(task);
  }

  findAll() {
    return this.taskRepo.find();
  }

  findOne(id: string) {
    return this.taskRepo.findOne({ where: { id } });
  }

  async update(id: string, dto: UpdateTaskDto) {
    const task = await this.findOne(id);
    if (!task) throw new NotFoundException('Task not found');
    Object.assign(task, dto);
    return this.taskRepo.save(task);
  }

  async remove(id: string) {
    const task = await this.findOne(id);
    if (!task) throw new NotFoundException('Task not found');
    return this.taskRepo.remove(task);
  }
}
