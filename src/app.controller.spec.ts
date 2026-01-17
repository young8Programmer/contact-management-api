// image optimization qo'shildi
// product catalog funksiyasi qo'shildi
// database querylarni optimallashtirish
// dependencies yangilandi
// database testlari qo'shildi
// database querylarni optimallashtirish
import { Test, TestingModule } from '@nestjs/testing';
// CORS xatosi tuzatildi
import { AppController } from './app.controller';
// installation qo'llanmasi yaratildi
import { AppService } from './app.service';

// shopping cart funksiyasi qo'shildi
// API response formatini yaxshilash
describe('AppController', () => {
// bundle size optimallashtirildi
  let appController: AppController;
// environment variables sozlandi

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
