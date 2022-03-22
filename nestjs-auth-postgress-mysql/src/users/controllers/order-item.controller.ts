import {
  Controller,
  Post,
  Body,
  ParseIntPipe,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

import {
  CreateOrderItemDto,
  UpdateOrderItemDto,
} from './../dtos/order-item.dto';
import { OrderItemService } from './../services/order-item.service';

@Controller('order-item')
export class OrderItemController {
  constructor(private itemsService: OrderItemService) {}

  @Post()
  create(@Body() payload: CreateOrderItemDto) {
    return this.itemsService.create(payload);
  }

  @Get('')
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.itemsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateOrderItemDto,
  ) {
    return this.itemsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.itemsService.delete(id);
  }
}
