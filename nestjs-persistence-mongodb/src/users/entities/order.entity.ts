import { User } from './user.entity';
import { Product } from '../../products/entities/product.entity';
import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Customer } from './customer.entity';

@Schema()
export class Order {
  @Prop({ type: Date })
  date: Date;

  @Prop({ type: Types.ObjectId, ref: Customer.name, required: true })
  user: User;

  @Prop({ type: [{ type: Types.ObjectId, ref: Product.name }] })
  products: Types.Array<Product>;
}
