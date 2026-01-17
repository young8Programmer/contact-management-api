// routing muammosi hal qilindi
// integration testlar yaratildi
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// CORS xatosi tuzatildi
// database connection muammosi hal qilindi
// kod formatlash va tozalash
// database querylarni optimallashtirish
// package.json yangilandi
// database querylarni optimallashtirish
// prettier formatlash
// kod formatlash va indentatsiya
async function bootstrap() {
// database testlari qo'shildi
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
