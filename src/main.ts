import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// database connection muammosi hal qilindi
// kod formatlash va tozalash
// package.json yangilandi
// database querylarni optimallashtirish
// kod formatlash va indentatsiya
async function bootstrap() {
// database testlari qo'shildi
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
