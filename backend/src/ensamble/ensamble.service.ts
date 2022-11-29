import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Ensamble, EnsambleDocument } from './ensamble.schema';
import { EnsambleDto } from './ensamble.dto';
import { UserDto } from 'src/user/user.dto';

@Injectable()
export class EnsambleService {
  constructor(
    @InjectModel(Ensamble.name)
    private ensambleModel: Model<EnsambleDocument>,
  ) {}
  getEnsambles(): Promise<Ensamble[]> {
    return this.ensambleModel.find().exec();
  }

  createEnsamble(ensamble: EnsambleDto) {
    const savedEnsamble = new this.ensambleModel(ensamble);
    savedEnsamble.save();
    return savedEnsamble;
  }

  create(create: EnsambleDto): Promise<Ensamble> {
    const createEnsamble = new this.ensambleModel(create);
    return createEnsamble.save();
  }
  async addUsers(id: string, ur: UserDto) {
    const updateEnsambel = await this.ensambleModel.findById(id);
    updateEnsambel.User.push(ur);

    return updateEnsambel.save();
  }
}
