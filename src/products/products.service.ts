import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/products';
import { CreateProductDto } from './dto/create-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';

// providers used for organizing code and managing dependencies
// providers in nestjs are responsible for creating and managing instances of classes that can be injected into other classes using dependency injection.
// services for storing and retrieving data

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
    const foundedProduct = this.products.find((product) => product.id === id);

    if (foundedProduct) {
      return foundedProduct;
    }

    return 'Product not found';
  }

  createNewProduct(product: CreateProductDto) {
    this.products.push({
      id: this.products.length + 1,
      ...product,
    });
    return product;
  }

  removeProduct(id: number) {
    return this.products.filter((product) => product.id !== id);
  }

  updateProduct(id: number, product: UpdateProductDto) {
    const index = this.products.findIndex((product) => product.id === id);

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
