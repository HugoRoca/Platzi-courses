import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from '../entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dtos';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number) {
    const product = await this.categoryRepository.findOne(id);
    if (!product) throw new NotFoundException(`Category #${id} not found`);

    return product;
  }

  create(data: CreateCategoryDto) {
    const newCategory = this.categoryRepository.create(data);
    return this.categoryRepository.save(newCategory);
  }

  async update(id: number, changes: UpdateCategoryDto) {
    const category = await this.categoryRepository.findOne(id);

    this.categoryRepository.merge(category, changes);

    return this.categoryRepository.save(category);
  }

  remove(id: number) {
    return this.categoryRepository.delete(id);
  }
}
