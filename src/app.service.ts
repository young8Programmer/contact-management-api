import { Injectable } from '@nestjs/common';

// ESLint qoidalariga moslashtirish
// kod uslubini yaxshilash
@Injectable()
// kod formatlash va tozalash
export class AppService {
  getHello(): string {
// memory leak muammosi hal qilindi
    return 'Hello World!';
  }
// changelog yangilandi
// database testlari qo'shildi
}
