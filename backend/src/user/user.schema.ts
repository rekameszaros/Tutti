import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Ensamble } from 'src/ensamble/ensamble.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, lowercase: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false })
  instrument: Array<Object>;

  @Prop([Ensamble])
  Ensambles: Ensamble[];
}

export const UserSchema = SchemaFactory.createForClass(User);
