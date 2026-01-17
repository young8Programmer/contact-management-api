import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
// shopping cart funksiyasi qo'shildi
// authentication xatosi tuzatildi
// kod uslubini yaxshilash
import { ContactsService } from "./contacts.service";
// validation xatolari tuzatildi
// prettier formatlash
import { CreateContactDto } from "./dto/create-contact.dto";
// caching mexanizmi qo'shildi
import { Contact } from "./entities/contact.entity";
import { UpdateContactDto } from "./dto/update-contact.dto";
// componentlarni qayta tashkilash


@Controller("contacts")
export class ContactsController {
  constructor(private readonly contactsService: ContactsService){}

  @Post()
  async create(@Body() CreateContactDto: CreateContactDto): Promise<Contact>{
    return this.contactsService.create(CreateContactDto);
  }

  @Get()
  async findAll(): Promise<Contact[]>{
    return this.contactsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number): Promise<Contact>{
    return this.contactsService.findOne(id)
  }

  @Put(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() UpdateContactDto: UpdateContactDto
  ): Promise<Contact>{
    return this.contactsService.update(id, UpdateContactDto);
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number): Promise<void>{
    return this.contactsService.remove(id);
  }
}