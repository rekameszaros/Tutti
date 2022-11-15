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
        'Mathias',
        'mtnl@cphbusiness.dk',
        '12341',
        'Some instr',
      );
      // Act
      const result = await request(app.getHttpServer())
        .post('/user')
        .send(user)
        .expect(201);
      // Assert
      const res = result.body;
      expect(res._id).toBeDefined();

      // not working with this as well ??
      // expect(res.__v).toEqual(0);
    });
  });

  describe('Post UserCard controller', () => {
    it('should create an invalid user ', async () => {
      // Arrange
      const user = new UserDto(
        '',
        'mtnl@cphbusiness.dk',
        '12341',
        'Some instrument',
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
      const user1 = new UserDto('Ade', 'ade@email.com', '1234', 'piano');
      const user2 = new UserDto(
        'Stefania',
        'stefania@email.com',
        '1234',
        'guitar',
      );

      await userService.createUser(user1);
      await userService.createUser(user2);

      //Act
      const result = await request(app.getHttpServer())
        .get('/user')
        .expect(200);

      //Assert (expect)
      const res = result.body;
      expect(res.length).toEqual(2);
      // expect(res._id).toBeDefined();
      // expect(res.__v).toEqual(0);
      // tests that I get what I should get
    });
  });

  // Closing app after all tests => not hanging.
  afterAll(() => {
    // mongoose.connection.close();
    app.close();
  });
});
