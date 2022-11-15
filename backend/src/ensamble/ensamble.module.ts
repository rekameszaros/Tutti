import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnsambleController } from './ensamble.controller';
import { Ensamble, EnsambleSchema} from './ensamble.schema';
import { EnsambleService } from './ensamble.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ensamble.name, schema: EnsambleSchema }]),
  ],
  controllers: [EnsambleController],
  providers: [ EnsambleService],
  exports: [ EnsambleService],
})
export class EnsambleModule {}
