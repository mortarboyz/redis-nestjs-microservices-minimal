import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('USER_SERVICE') private user: ClientProxy,
  ) {}

  @Get()
  async getHello(): Promise<any> {
    return await this.user.send('redis-test', {});
  }
}
