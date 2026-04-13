import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/products.entity';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { CreateProductDto } from './DTOs/create-product.dto';
import { UpdateProductDto } from './DTOs/update-product.dto';
import { PartialUpdateProductDto } from './DTOs/partial-update-product.dto';
import { ILike, Like } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product)
    private ProductRepository: Repository<Product>) {

        // Initialize any necessary resources or dependencies here
    }
    async create(createProductDto: CreateProductDto) {
        const product = this.ProductRepository.create(createProductDto);
        const savedProduct = await this.ProductRepository.save(product);
        return {
            message: 'Product created successfully',
            data: savedProduct
        };
    }


    async findAll() {
        const product = await this.ProductRepository.find();
        return {
            message: 'Products retrieved successfully',
            data: product
        };
    }
    async findOne(id: number) {
        const product = await this.ProductRepository.findOneBy({ id });
        return {
            message: 'Product retrieved successfully',
            data: product
        };
    }
    async update(id: number, partialProduct: PartialUpdateProductDto) {
        const product = await this.ProductRepository.findOne({ where: { id } });


        if (!product) {
            throw new BadRequestException('Product not found');
        }
        else {
            const updateUser = this.ProductRepository.merge(product, partialProduct);
            return this.ProductRepository.save(updateUser);
        }
    }
    async replace(id: number, updateProductDto: UpdateProductDto) {
        const product = await this.ProductRepository.findOne({ where: { id } });

        if (!product) {
            throw new BadRequestException('Product not found');
        }
        else {
            const updatedProduct = this.ProductRepository.create({
                id,
                ...updateProductDto
            });
            return this.ProductRepository.save(updatedProduct);
        }
    }
    async remove(id: number) {
        const product = await this.ProductRepository.findOne({ where: { id } });
        if (!product) {
            throw new BadRequestException('Product not found');
        } else {
            await this.ProductRepository.remove(product);
        }
    }
    async findByCategory(category: string) {
        const products = await this.ProductRepository.find({ where: { category } });
        return {
            message: 'Products retrieved successfully',
            data: products
        };

    }
    async search(keyword: string) {
  const products = await this.ProductRepository.find({
    where: {
      name: Like(`%${keyword}%`)as any
    }
  });

  return {
    message: 'Search results',
    count: products.length,
    data: products
  };
}
}

