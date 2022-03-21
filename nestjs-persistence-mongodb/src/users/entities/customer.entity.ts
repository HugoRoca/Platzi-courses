import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { SubDoc, SubDocSchema } from './sub-doc.entity';

@Schema()
export class Customer extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  phone: string;

  @Prop({ type: [SubDocSchema] })
  skills: Types.Array<SubDoc>;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
