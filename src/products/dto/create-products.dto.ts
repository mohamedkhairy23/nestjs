import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  Length,
  Max,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

class createProductDetailsDto {
  @IsNotEmpty()
  color: string;
  @IsNotEmpty()
  @IsInt()
  @Min(12)
  @Max(45)
  size: number;
  @IsNotEmpty()
  brand: string;
}

export class CreateProductDto {
  @Length(5, 50)
  title: string;
  @IsNotEmpty()
  @MinLength(50)
  description: string;
  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => createProductDetailsDto)
  details: createProductDetailsDto;
}
