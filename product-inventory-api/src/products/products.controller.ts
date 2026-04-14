import { Controller, Post, Body, Patch, Param, Put, Delete, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './DTOs/create-product.dto';
import { UpdateProductDto } from './DTOs/update-product.dto';
import { PartialUpdateProductDto } from './DTOs/partial-update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
    // Initialize any necessary resources or dependencies here
  }
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
  @Patch(':id')
  update(@Param('id') id: number, @Body() PartialUpdateProductDto: PartialUpdateProductDto) {
    return this.productsService.update(id, PartialUpdateProductDto);
  }
  @Put(':id')
  replace(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.replace(id, updateProductDto);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productsService.remove(id);
  }
  @Get()
  findAll() {
    return this.productsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }
  @Patch(':id/toggle')
  toggleActive(@Param('id') id: number) {
    return this.productsService.toggleActive(id);
  }
}
