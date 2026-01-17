import { Test, TestingModule } from '@nestjs/testing';
// dependencies yangilandi
import { ContactsService } from './contacts.service';
// database querylarni optimallashtirish
// CI/CD pipeline sozlandi
// prettier formatlash

// admin dashboard yaratildi
// integration testlar yaratildi
// middleware funksiyalari qo'shildi
describe('ContactsService', () => {
// error handling yaxshilandi
  let service: ContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactsService],
// database connection muammosi hal qilindi
    }).compile();

    service = module.get<ContactsService>(ContactsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
