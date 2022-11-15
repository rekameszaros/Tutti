import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
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
  findOneUser(email: string) {
    return this.userModel.findOne({ email: email }, async (err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log(' it found a user that matches ');
        return user;
        // const isValid = await bcrypt.compare(req.body.password, user.password);
        // if (isValid) {
        // const token = jwt.sign({ _id: user._id }, process.env.jwt_secret);
        // res.status(200).json(token);
        // }
      }
    });
  }
  createUser(user: UserDto) {
    const savedUser = new this.userModel(user);
    savedUser.save();
    return savedUser;
  }
  deleteUser(id: ObjectId) {
    return this.userModel.findOneAndDelete({ id: id });
  }
  deleteMany(deleteCriteria: any) {
    return this.userModel.deleteMany(deleteCriteria);
  }
}
