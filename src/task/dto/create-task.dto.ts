import { Priority, Status } from '../../generated/prisma/enums';
import { IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { Optional } from '@nestjs/common';

export class CreateTaskDto {
  @IsNotEmpty()
  @MinLength(3)
  title!: string;

  @MinLength(3)
  @Optional()
  description!: string;

  @IsEnum(Status)
  status!: Status;

  @IsEnum(Priority)
  priority!: Priority;
}
