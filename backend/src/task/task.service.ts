import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prismaCore/prisma.service';
import { Priority, Status } from '../generated/prisma/enums';
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
  // Get tasks by status /task/status/:status
  async findByStatus(status: Status) {
    return this.prisma.task.findMany({
      where: {
        status,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }
  //Get task by priority /task/priority/:priority
  async findByPriority(priority: Priority) {
    return this.prisma.task.findMany({
      where: {
        priority,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }
  // Get tasks by priority and status /task/priority/:priority/status/:status
  async findByPriorityAndStatus(priority: Priority, status: Status) {
    return this.prisma.task.findMany({
      where: {
        priority,
        status,
      },
      orderBy: {
        id: 'desc',
      },
    });
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
  // Update status /task/:id/:status
  async updateByStatus(id: number, newStatus: Status) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    console.log(task);
    if (!task) {
      throw new Error('Не найдена');
    }
    const allowedTransitions: Record<Status, Status[]> = {
      // если todo, то можно сделать in_progress
      todo: ['in_progress'],
      // если in_progress то только в done
      in_progress: ['done'],
      // если done, то нельзя изменить
      done: [],
    };

    const canChange = allowedTransitions[task.status].includes(newStatus);
    console.log(canChange);
    if (!canChange) {
      throw new Error('Нельзя изменить статус обратно');
    }
    return this.prisma.task.update({
      where: { id },
      data: { status: newStatus },
    });
  }

  //
  async updateByPriority(id: number, priority: Priority) {
    return this.prisma.task.update({
      where: { id },
      data: { priority: priority },
    });
  }

  // Delete task /task/:id
  remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}
