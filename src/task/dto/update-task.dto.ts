import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { Priority, Status } from '../../generated/prisma/enums';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  title: string;
  description: string;
  status?: Status;
  priority?: Priority;
}
