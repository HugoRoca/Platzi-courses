import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  findAll() {
    return this.customerRepository.find();
  }

  async findOne(id: number) {
    const customer = await this.customerRepository.findOne(id);
    if (!customer) throw new NotFoundException(`Customer #${id} not found`);

    return customer;
  }

  create(data: CreateCustomerDto) {
    const newCustomer = this.customerRepository.create(data);
    return this.customerRepository.save(newCustomer);
  }

  async update(id: number, changes: UpdateCustomerDto) {
    const customer = await this.customerRepository.findOne(id);
    this.customerRepository.merge(customer, changes);
    return this.customerRepository.save(customer);
  }

  remove(id: number) {
    return this.customerRepository.delete(id);
  }
}
