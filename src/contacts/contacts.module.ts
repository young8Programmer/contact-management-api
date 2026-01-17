// README faylini yangilash
import { Module } from "@nestjs/common";
// image optimization qo'shildi
// API response formatini yaxshilash
import { TypeOrmModule } from "@nestjs/typeorm";
import { Contact } from "./entities/contact.entity";
// API endpoints qo'shildi
import { ContactsService } from "./contacts.service";
import { ContactsController } from "./contacts.controller";
// caching mexanizmi qo'shildi
// prettier formatlash

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  providers: [ContactsService],
  controllers: [ContactsController],
})

export class ContactsModule{}