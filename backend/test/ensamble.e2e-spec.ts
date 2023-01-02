import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
// import { AppModule } from 'src/app.module';
import { EnsambleDto } from './../src/ensamble/ensamble.dto';
import { TestModule } from './../src/test.module';
import { EnsambleService } from './../src/ensamble/ensamble.service';
import { ValidationPipe } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/user/user.schema';

describe('User Controller (e2e)', () => {
  let app: INestApplication;
  let ensambleService: EnsambleService;

  beforeEach(async () => {
    await ensambleService.deleteMany({}); // delete all users.
  });

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestModule],
    }).compile();

    ensambleService = moduleFixture.get(EnsambleService);
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  describe('Post Ensamble controller', () => {
    it('should create a new valid ensamble ', async () => {
      // Arrange
      const ensamble = new EnsambleDto(
        {
          _id: '63a9c1fc5e5e89313b58d568',
          name: 'Adelina',
          email: 'adelina@email.com',
          password:
            '$2b$10$LMOiPgALAsEXypeRGRWZqeiio6e5KZtKcwBTFeLs4GJhjXRjmEmgO',
          instrument: [{ name: 'Piano', id: 2 }],
          Ensambles: [],
        },
        'Ensamble in testing',
        'Frederiksberg',
        'This ensamble is from a test',
        [
          {
            name: 'Jazz',
            id: 3,
          },
        ],
        [],
      );
      // Act
      const result = await request(app.getHttpServer())
        .post('/ensamble')
        .send(ensamble)
        .expect(201);
      // Assert
      const res = result.body;
      console.log(res);
      expect(res).toBeDefined();
    });
  });

  // Closing app after all tests => not hanging.
  afterAll(() => {
    app.close();
  });
});
