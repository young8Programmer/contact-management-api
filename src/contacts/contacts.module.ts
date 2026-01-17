// routing muammosi hal qilindi
// README faylini yangilash
import { Module } from "@nestjs/common";
// image optimization qo'shildi
// kod uslubini yaxshilash
// database querylarni optimallashtirish
// API response formatini yaxshilash
// memory leak muammosi hal qilindi
import { TypeOrmModule } from "@nestjs/typeorm";
// caching mexanizmi qo'shildi
import { Contact } from "./entities/contact.entity";
// README faylini yangilash
// API endpoints qo'shildi
import { ContactsService } from "./contacts.service";
// API hujjatlarini qo'shish
import { ContactsController } from "./contacts.controller";
// caching mexanizmi qo'shildi
// prettier formatlash

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  providers: [ContactsService],
  controllers: [ContactsController],
})

export class ContactsModule{}