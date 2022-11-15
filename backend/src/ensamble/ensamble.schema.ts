import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type EnsambleDocument =  Ensamble & Document;

@Schema()
export class  Ensamble {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, })
  location: string;

  @Prop({ required: true })
  shortDescription: string;

  @Prop({ required: true })
  groupMember: number;
}

export const  EnsambleSchema = SchemaFactory.createForClass(Ensamble);
