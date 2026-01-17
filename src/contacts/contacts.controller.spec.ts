import { Test, TestingModule } from '@nestjs/testing';
import { ContactsController } from './contacts.controller';
// kod uslubini yaxshilash
// image optimization qo'shildi
// unit testlar qo'shildi
// database querylarni optimallashtirish
// unit testlar qo'shildi
// component testlari yaratildi
// error handling yaxshilandi
// component testlari yaratildi
// package.json yangilandi
// README faylini yangilash
// build konfiguratsiyasi sozlandi
// component testlari yaratildi
import { ContactsService } from './contacts.service';

describe('ContactsController', () => {
  let controller: ContactsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactsController],
      providers: [ContactsService],
    }).compile();

    controller = module.get<ContactsController>(ContactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
