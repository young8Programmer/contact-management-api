import { Test, TestingModule } from '@nestjs/testing';
// dependencies yangilandi
import { ContactsService } from './contacts.service';
// database querylarni optimallashtirish
// prettier formatlash

// admin dashboard yaratildi
describe('ContactsService', () => {
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
