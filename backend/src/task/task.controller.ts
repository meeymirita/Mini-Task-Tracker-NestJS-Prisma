import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Priority, Status } from '../generated/prisma/enums';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  // Get all tasks /tasks
  @Get()
  findAll() {
    return this.taskService.findAll();
  }
  // Create task /task
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }
  // Get one task /tasks/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(+id);
    return this.taskService.findOne(+id);
  }
  // Get tasks by status /task/status/:status
  @Get('status/:status')
  findByStatus(@Param('status') status: Status) {
    return this.taskService.findByStatus(status);
  }
  // Update __Patch__ status /tasks/status/:id/:status
  @Patch('status/:id/:status')
  updateStatus(@Param('id') id: string, @Param('status') status: Status) {
    return this.taskService.updateByStatus(+id, status);
  }
  // Get tasks by priority /task/priority/:priority
  @Get('priority/:priority')
  findByPriority(@Param('priority') priority: Priority) {
    return this.taskService.findByPriority(priority);
  }
  // Update __Patch__ status /priority/:id/:priority
  @Patch('priority/:id/:priority')
  updatePriority(
    @Param('id') id: string,
    @Param('priority') priority: Priority,
  ) {
    return this.taskService.updateByPriority(+id, priority);
  }
  // Gat tasks by priority and status /task/priority/:priority/status/:status
  @Get('priority/:priority/status/:status')
  findByPriorityAndStatus(
    @Param('priority') priority: Priority,
    @Param('status') status: Status,
  ) {
    return this.taskService.findByPriorityAndStatus(priority, status);
  }

  // Patch task /task/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }
  // Delete task /task/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
