import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  private products: { id: number; title: string }[] = [
    { id: 1, title: 'First Product' },
    { id: 2, title: 'Second Product' },
    { id: 3, title: 'Third Product' },
  ];

  @Get() // ** /products
  getProducts() {
    return this.products;
  }

  // ** /products/1
  @Get(':id')
  getProductById(@Param('id') id: string) {
    const filteredProducts = this.products.filter(
      (product) => product.id === +id,
    );

    if (filteredProducts.length) {
      return filteredProducts;
    }

    return 'Product not found';
  }
}
