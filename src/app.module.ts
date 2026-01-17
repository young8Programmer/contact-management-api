// database querylarni optimallashtirish
// product catalog funksiyasi qo'shildi
// kod uslubini yaxshilash
// CORS xatosi tuzatildi
// CORS xatosi tuzatildi
// database querylarni optimallashtirish
import { Module } from '@nestjs/common';
// database querylarni optimallashtirish
import { AppController } from './app.controller';
// README faylini yangilash
// database connection muammosi hal qilindi
// database querylarni optimallashtirish
import { AppService } from './app.service';
// code comments qo'shildi
// package.json yangilandi
// componentlarni qayta tashkilash
import { TypeOrmModule } from '@nestjs/typeorm';
// environment variables sozlandi
import { ContactsModule } from './contacts/contacts.module';
import { Contact } from './contacts/entities/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      database: "contacts",
      password: "1234",
      host: "localhost",
      port: 5432,
      username: "postgres",
      entities: [Contact],
      synchronize: true
    }),
    ContactsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
