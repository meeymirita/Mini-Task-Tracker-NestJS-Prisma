import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {
  // constructor(private readonly userService: UsersService) {}
  @Get('/')
  startPage() {
    return 'Hello World!';
  }
}
