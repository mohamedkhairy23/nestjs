import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsMiddleware } from './products.middleware';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer
    //   .apply(ProductsMiddleware)
    //   .forRoutes({ path: 'products', method: RequestMethod.GET });
    ///////////////////////////
    // consumer
    //   .apply(ProductsMiddleware)
    //   .exclude(
    //     { path: 'products/:id', method: RequestMethod.GET },
    //     { path: 'products/:id', method: RequestMethod.DELETE },
    //   )
    //   .forRoutes('products');
    ////////////////////////////
    consumer
      .apply(ProductsMiddleware)
      .exclude({ path: 'products', method: RequestMethod.GET }, 'products/(.*)')
      .forRoutes(ProductsController);
  }
}
