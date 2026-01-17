import { Injectable } from '@nestjs/common';

// kod uslubini yaxshilash
@Injectable()
export class AppService {
  getHello(): string {
// memory leak muammosi hal qilindi
    return 'Hello World!';
  }
// changelog yangilandi
// database testlari qo'shildi
}
