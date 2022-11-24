import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/user.schema';
import * as mongoose from 'mongoose';


export type EnsambleDocument =  Ensamble & Document;

@Schema()
export class  Ensamble {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, })
  location: string;

  @Prop({ required: true })
  shortDescription: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }] })
  User: User[]
}

export const  EnsambleSchema = SchemaFactory.createForClass(Ensamble);
