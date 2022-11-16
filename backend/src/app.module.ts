import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { AuthService } from './auth/auth.service';
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
      'mongodb+srv://tuttiuser:tuttipassword@tutti.ipgkfmj.mongodb.net/tutti',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
