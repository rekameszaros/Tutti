import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}
  //   getBusinessCards(): Promise<BusinessCard[]> {
  //     return this.bcModel.find().exec();
  //   }
  createUser(user: any) {
    const savedUser = new this.userModel(user);
    savedUser.save();
    return savedUser;
    // connect to database and save business card
  }
  //   updateBusinessCard(id: string, businessCard: any) {
  //     // connect to databse and update
  //   }
  //   deleteBusinessCard(id: string) {
  //     // delete the business card
  //   }
}
