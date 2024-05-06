import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/products';

// serice for storing and retrieving data
@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: 1, title: 'First Product' },
    { id: 2, title: 'Second Product' },
    { id: 3, title: 'Third Product' },
  ];

  getProducts() {
    return this.products;
  }

  getSingleProduct(id: number): Product | string {
    const foundedProduct = this.products.find((product) => product.id === +id);

    if (foundedProduct) {
      return foundedProduct;
    }

    return 'Product not found';
  }

  createNewProduct(product: Product) {
    this.products.push({
      id: this.products.length + 1,
      ...product,
    });
    return product;
  }

  removeProduct(id: number) {
    return this.products.filter((product) => product.id !== +id);
  }

  updateProduct(id: number, product: Product) {
    const index = this.products.findIndex((product) => product.id === +id);

    if (index !== -1) {
      const updatedProduct = product;
      this.products[index] = {
        ...this.products[index],
        ...updatedProduct,
      };
      return this.products[index];
    }

    return 'Product not found';
  }
}
