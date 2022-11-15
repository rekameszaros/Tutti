import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { encodePassword } from 'src/utils/bcrypt';
import { UserDto } from './user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}
  getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async findOneUser(email: string): Promise<User> {
    console.log(this.userModel.findOne({ email: email }).exec());
    return this.userModel.findOne({ email: email }).exec();
  }
  async createUser(user: UserDto): Promise<User> {
    const password = encodePassword(user.password);
    console.log(password);
    const savedUser = new this.userModel({ ...user, password });
    return savedUser.save();
  }
  deleteUser(id: ObjectId) {
    return this.userModel.findOneAndDelete({ id: id });
  }
  deleteMany(deleteCriteria: any) {
    return this.userModel.deleteMany(deleteCriteria);
  }
}
