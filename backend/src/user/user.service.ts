import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { EnsambleDto } from 'src/ensamble/ensamble.dto';
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

  // find a user based on email for authentication
  async findOneUser(email: string): Promise<User> {
    console.log(this.userModel.findOne({ email: email }).exec());
    return this.userModel.findOne({ email: email }).exec();
  }

  // get one user based on param id
  async getOneUser(id: string): Promise<User> {
    console.log(this.userModel.findOne({ _id: id }).exec());
    return this.userModel.findOne({ _id: id }).exec();
  }

  updateUser(user: UserDto, id: string) {
    this.userModel.findByIdAndUpdate(id, user);
    const newUser = {
      name: user.name,
      email: user.email,
      instrument: user.instrument,
    };
    console.log(newUser);
    return this.userModel.findOneAndUpdate({ _id: id }, newUser);
  }

  async createUser(user: UserDto): Promise<User> {
    const password = encodePassword(user.password);
    console.log(password);
    const savedUser = new this.userModel({ ...user, password });
    return savedUser.save();
  }

  deleteUser(id: ObjectId) {
    return this.userModel.findOneAndDelete({ _id: id });
  }

  // this one is for the testing
  deleteMany(deleteCriteria: any) {
    return this.userModel.deleteMany(deleteCriteria);
  }

  async addEnsambles(id: string, ensamble: EnsambleDto) {
    const updateUser = await this.userModel.findById(id);
    updateUser.Ensambles.push(ensamble);
    return updateUser.save();
  }
}
