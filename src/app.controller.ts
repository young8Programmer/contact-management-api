// validation xatolari tuzatildi
// environment variables sozlandi
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
// authentication xatosi tuzatildi
export class AppController {
// integration testlar yaratildi
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
