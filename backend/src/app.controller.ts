import { Controller, Get } from '@nestjs/common';
import 'dotenv/config';

@Controller()
export class AppController {
  @Get('/')
  startPage() {
    console.log(process.env.DATABASE_URL);
    return 'Hello World!';
  }
}
