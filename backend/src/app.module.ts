import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { EnsambleModule } from './ensamble/ensamble.module';
@Module({
  imports: [
    UserModule, EnsambleModule,
    MongooseModule.forRoot(
      'mongodb+srv://tuttiuser:tuttipassword@tutti.ipgkfmj.mongodb.net/tutti',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
