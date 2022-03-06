import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

import { Customer } from './entities/customer.entity';
import { User } from './entities/user.entity';

import { ProductsModule } from '../products/products.module';

@Module({
  imports: [ProductsModule, TypeOrmModule.forFeature([Customer, User])],
  controllers: [CustomerController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
