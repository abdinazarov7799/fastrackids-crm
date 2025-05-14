import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './entities/expense.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private expenseRepo: Repository<Expense>,
  ) {}

  create(dto: CreateExpenseDto) {
    const expense = this.expenseRepo.create(dto);
    return this.expenseRepo.save(expense);
  }

  findAll() {
    return this.expenseRepo.find();
  }

  findOne(id: string) {
    return this.expenseRepo.findOne({ where: { id } });
  }

  async update(id: string, dto: UpdateExpenseDto) {
    await this.expenseRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const expense = await this.findOne(id);
    if (!expense) throw new NotFoundException('Expense not found');
    return this.expenseRepo.remove(expense);
  }
}
