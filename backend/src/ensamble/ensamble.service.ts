import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ensamble, EnsambleDocument } from './ensamble.schema';

@Injectable()
export class EnsambleService {
  constructor(
    @InjectModel(Ensamble.name)
    private ensambleModel: Model<EnsambleDocument>,
  ) {}
   getEnsambles(): Promise<Ensamble[]> {
       return this.ensambleModel.find().exec();
    }
  createEnsamble(ensamble: any) {
    const savedEnsamble = new this.ensambleModel(ensamble);
    savedEnsamble.save();
    return savedEnsamble;
    // connect to database and save business card
  }
  //   updateBusinessCard(id: string, businessCard: any) {
  //     // connect to databse and update
  //   }
  //   deleteBusinessCard(id: string) {
  //     // delete the business card
  //   }
}
