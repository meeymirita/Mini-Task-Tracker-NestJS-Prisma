import { Priority, Status } from '../../generated/prisma/enums';
export class CreateTaskDto {
  title: string;
  description: string;
  status: Status;
  priority: Priority;
}
