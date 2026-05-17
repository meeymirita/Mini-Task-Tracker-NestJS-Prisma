import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prismaCore/prisma.service';
@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}
  // Create task /task
  async create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: createTaskDto,
    });
  }

  // Get all tasks /task
  async findAll() {
    return this.prisma.task.findMany();
  }
  // Get one task /task/:id
  findOne(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }
  // Update task /task/:id
  async update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      return await this.prisma.task.update({
        where: { id },
        data: updateTaskDto,
      });
    } catch (error) {
      console.error('Update task error:', error);
      throw new Error('Failed to update task');
    }
  }

  // Delete task /task/:id
  remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}
