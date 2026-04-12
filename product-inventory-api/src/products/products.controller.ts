import { Controller,Post,Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './DTOs/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {
        // Initialize any necessary resources or dependencies here
    }
    @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
}
