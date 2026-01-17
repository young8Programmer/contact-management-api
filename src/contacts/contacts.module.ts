import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Contact } from "./entities/contact.entity";
// API endpoints qo'shildi
import { ContactsService } from "./contacts.service";
import { ContactsController } from "./contacts.controller";
// prettier formatlash

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  providers: [ContactsService],
  controllers: [ContactsController],
})

export class ContactsModule{}