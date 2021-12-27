import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  ParseIntPipe,
} from '@nestjs/common';
// import { Response } from 'express';
import { ProductsService } from '../services/products.service';
// import { ParseIntPipe } from '../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Controller('products')
export class ProductsController {
  // TODO: inject service
  constructor(private productsService: ProductsService) {}

  // TODO: the routes now dynamic, are first
  @Get('/filter')
  getProductsFilter() {
    return `product filter`;
  }

  // @Get('/:id')
  // @HttpCode(HttpStatus.ACCEPTED)
  // TODO: @Res for token, etc (express simulator)
  // getProduct(@Res() response: Response, @Param('id') id: string) {
  //   response.status(200).send({ message: `product ${id}` });
  //   return this.productsService.findOne(id);
  // }

  @Get('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  // TODO: get params query
  @Get('')
  getProductQueryV1(@Query() params: any) {
    const { limit, offset } = params;
    return this.productsService.findAll();
  }

  // @Get('/query')
  // getProductQueryV2(
  //   @Query('limit') limit = 100, // TODO: set default value
  //   @Query('offset') offset = 0,
  //   @Query('brand') brand: string,
  // ) {
  //   return {
  //     message: `products limit: ${limit} - offset: ${offset} - brand: ${brand}`,
  //   };
  // }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    return this.productsService.update(parseInt(id), payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.delete(parseInt(id));
  }
}
