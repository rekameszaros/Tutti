import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
// import { AppModule } from 'src/app.module';
import { UserDto } from './../src/user/user.dto';
import { TestModule } from './../src/test.module';
import { UserService } from './../src/user/user.service';
import { ValidationPipe } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/user/user.schema';

describe('User Controller (e2e)', () => {
  let app: INestApplication;
  let userService: UserService;

  beforeEach(async () => {
    await userService.deleteMany({}); // delete all users.
  });

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestModule],
    }).compile();

    userService = moduleFixture.get(UserService);
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  describe('Post UserCard controller', () => {
    it('should create a new valid user ', async () => {
      // Arrange
      const user = new UserDto(
        'Adelina',
        'adelina@cphbusiness.dk',
        '12345678Adelina@',
        [{ name: 'Piano', id: 2 }],
        [],
      );
      // Act
      const result = await request(app.getHttpServer())
        .post('/user')
        .send(user)
        .expect(201);
      // Assert
      const res = result.body;
      expect(res).toBeDefined();
    });
  });

  describe('Post UserCard controller', () => {
    it('should create an invalid user ', async () => {
      // Arrange
      const user = new UserDto(
        // the name is empty to create an invalid one
        '',
        'adelina@email.com',
        '12345678Adelina@',
        [{ name: 'Piano', id: 2 }],
        [
          {
            createdBy: {
              _id: '63a9c1fc5e5e89313b58d568',
              name: 'Adelina',
              email: 'adelina@email.com',
              password:
                '$2b$10$LMOiPgALAsEXypeRGRWZqeiio6e5KZtKcwBTFeLs4GJhjXRjmEmgO',
              instrument: [{ name: 'Piano', id: 2 }],
              Ensambles: [],
            },
            name: 'Ensamble from testing',
            location: 'Nordhavn',
            shortDescription: 'Ensamble created from testing.',
            musicGenre: [],
            User: [],
          },
        ],
      );
      // Act
      const result = await request(app.getHttpServer())
        .post('/user')
        .send(user)
        .expect(400);
      // Assert
      expect(result.body.message[0]).toEqual('name should not be empty');
    });
  });

  describe('Get User controller', () => {
    it('should get all users', async () => {
      // Arrange
      const user1 = new UserDto(
        'John',
        'john@email.com',
        'john12345678J@',
        [{ name: 'Piano', id: 2 }],
        [
          {
            createdBy: {
              _id: '63a9c1fc5e5e89313b58d568',
              name: 'John',
              email: 'John@email.com',
              password:
                '$2b$10$LMOiPgALAsEXypeRGRWZqeiio6e5KZtKcwBTFeLs4GJhjXRjmEmgO',
              instrument: [{ name: 'Piano', id: 2 }],
              Ensambles: [],
            },
            name: 'Ensamble from testing',
            location: 'Nordhavn',
            shortDescription: 'Ensamble created from testing.',
            musicGenre: [],
            User: [],
          },
        ],
      );
      const user2 = new UserDto(
        'Mary',
        'mary@email.com',
        '12345678Mary@',
        [{ name: 'Guitar', id: 2 }],
        [
          {
            createdBy: {
              _id: '63a9c1fc5e5e89313b58d568',
              name: 'Mary',
              email: 'Mary@email.com',
              password:
                '$2b$10$LMOiPgALAsEXypeRGRWZqeiio6e5KZtKcwBTFeLs4GJhjXRjmEmgO',
              instrument: [{ name: 'Piano', id: 2 }],
              Ensambles: [],
            },
            name: 'Ensamble from testing',
            location: 'Nordhavn',
            shortDescription: 'Ensamble created from testing.',
            musicGenre: [],
            User: [],
          },
        ],
      );

      await userService.createUser(user1);

      await userService.createUser(user2);

      //Act
      const result = await request(app.getHttpServer())
        .get(`/user`)
        .expect(200);
      //Assert (expect)
      const res = await result.body;
      console.log(res);
      expect(res.length).toEqual(2);
    });
  });

  // Closing app after all tests => not hanging.
  afterAll(() => {
    app.close();
  });
});
