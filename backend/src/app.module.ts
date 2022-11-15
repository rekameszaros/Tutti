import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://tuttiuser:tuttipassword@tutti.ipgkfmj.mongodb.net/tutti',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
