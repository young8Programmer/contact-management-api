// caching mexanizmi qo'shildi
import { Test, TestingModule } from '@nestjs/testing';
// build konfiguratsiyasi sozlandi
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
// kod strukturasini yaxshilash

describe('AppController (e2e)', () => {
// API response formatini yaxshilash
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
