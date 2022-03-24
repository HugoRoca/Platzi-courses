import { Controller, Get, Param, UseGuards, SetMetadata } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiKeyGuard } from './auth/guards/api-key.guard';
import { Public } from './auth/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(ApiKeyGuard)
  @SetMetadata('isPublic', true)
  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @UseGuards(ApiKeyGuard)
  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }

  @UseGuards(ApiKeyGuard)
  @Public()
  @Get('tasks')
  tasks() {
    return this.appService.getTasks();
  }

  @Get('test/sql/:document')
  testSQL(@Param('document') document: string) {
    return this.appService.getDataFromSQL(document);
  }
}
