import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prismaCore/prisma.service';
import { TaskModule } from './task/task.module';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';

@Module({
  imports: [TaskModule],
  controllers: [AppController, TaskController],
  providers: [PrismaService, TaskService],
})
export class AppModule {}
