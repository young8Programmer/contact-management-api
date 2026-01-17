// API endpoint testlari qo'shildi
// API endpoint testlari qo'shildi
// environment variables sozlandi
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
// componentlarni qayta tashkilash
// API response formatini yaxshilash
// componentlarni qayta tashkilash
// bundle size optimallashtirildi
// memory leak muammosi hal qilindi
// kod formatlash va indentatsiya
import { Contact } from "./entities/contact.entity";
// environment variables sozlandi
import { Repository } from "typeorm";
// image optimization qo'shildi
import { CreateContactDto } from "./dto/create-contact.dto";
// build konfiguratsiyasi sozlandi
import { UpdateContactDto } from "./dto/update-contact.dto";

// environment variables sozlandi
// README faylini yangilash

@Injectable()
export class ContactsService{
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ){}

  async create(createContactDto: CreateContactDto): Promise<Contact>{
    const contact = this.contactRepository.create(createContactDto);
    return this.contactRepository.save(contact)
  }

  async findAll(): Promise<Contact[]>{
    return this.contactRepository.find({
      order: {name: "ASC"},
    });
  }

  async findOne(id: number): Promise<Contact>{
    const contact = await this.contactRepository.findOne({where: {id}});
    if(!contact){
      throw new NotFoundException(`Contact with ID ${id} not found`);
    }
    return contact;
  }

  async update(id: number, UpdateContactDto: UpdateContactDto): Promise<Contact>{
    const contact = await this.findOne(id);
    Object.assign(contact, UpdateContactDto);
    return this.contactRepository.save(contact);
  }

  async remove(id: number): Promise<void>{
    const contact = await this.findOne(id);
    await this.contactRepository.remove(contact);
  }
}