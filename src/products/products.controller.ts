import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { ProductsService } from './products.service';
import { Product } from 'src/interfaces/products';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get() // ** /products
  getProducts() {
    return this.productsService.getProducts();
  }

  // ** /products/1
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getSingleProduct(+id);
  }

  @Post() // ** /products
  addProduct(@Req() req: Request): Product {
    return this.productsService.createNewProduct(req.body);
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    return this.productsService.removeProduct(+id);
  }

  @Put(':id') // ** /products/:id
  updateProduct(
    @Param('id') id: string,
    @Body() body: Product,
  ): Product | string {
    return this.productsService.updateProduct(+id, body);
  }
}
