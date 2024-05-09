import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from 'src/interfaces/products';
import { CreateProductDto } from './dto/create-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get() // ** /products
  getProducts() {
    return this.productsService.getProducts();
  }

  // ** /products/1
  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getSingleProduct(id);
  }

  @Post() // ** /products
  @UsePipes(ValidationPipe)
  addProduct(@Body() createProductDto: CreateProductDto): Product {
    return this.productsService.createNewProduct(createProductDto);
  }

  @Delete(':id')
  removeProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.removeProduct(id);
  }

  @Put(':id') // ** /products/:id
  @UsePipes(ValidationPipe)
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Product | string {
    return this.productsService.updateProduct(id, updateProductDto);
  }
}
