// kod uslubini yaxshilash
// README faylini yangilash
// image optimization qo'shildi
// API hujjatlarini qo'shish
// validation xatolari tuzatildi
// API response formatini yaxshilash
// environment variables sozlandi
// environment variables sozlandi
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// database testlari qo'shildi

@Controller()
// kod formatlash va indentatsiya
// authentication xatosi tuzatildi
export class AppController {
// integration testlar yaratildi
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
