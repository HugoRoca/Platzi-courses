import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      price: 1879.53,
      image: 'http://placehold.it/32x32',
      name: 'Marie Gilliam',
      description:
        'Ipsum mollit non non nisi cillum incididunt fugiat reprehenderit cillum reprehenderit. Consectetur exercitation minim ad nisi anim excepteur ut magna irure fugiat minim labore. Ex magna esse nostrud aliquip adipisicing sunt laboris officia velit aliquip enim elit. Id fugiat consequat exercitation et deserunt excepteur commodo et excepteur. Dolore do pariatur ullamco voluptate adipisicing sunt mollit ipsum enim consectetur excepteur ullamco. Consequat minim aliqua enim amet quis enim in sunt aute dolor culpa ex enim aliquip.\r\n',
      stock: 50,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((x) => x.id === id);

    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);

    if (product) {
      const index = this.products.findIndex((x) => x.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }

    return null;
  }

  delete(id: number) {
    const index = this.products.findIndex((x) => x.id === id);

    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    this.products.splice(index, 1);
    return true;
  }
}
