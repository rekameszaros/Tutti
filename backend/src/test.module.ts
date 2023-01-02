import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { EnsambleModule } from './ensamble/ensamble.module';
@Module({
  imports: [
    UserModule,
    AuthModule,
    EnsambleModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30m' },
    }),
    MongooseModule.forRoot(
      'mongodb+srv://tuttiuser:tuttipassword@tutti.ipgkfmj.mongodb.net/tutti-tests',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class TestModule {}
