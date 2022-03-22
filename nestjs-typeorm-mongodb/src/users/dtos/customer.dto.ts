import {
  IsString,
  IsNotEmpty,
  IsPhoneNumber,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CreateSubDocDto } from './sub-doc.dto';

export class Skills {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  color: string;
}

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSubDocDto)
  readonly skills: CreateSubDocDto[];
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
