import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/products.entity';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { CreateProductDto } from './DTOs/create-product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) 
    private ProductRepository: Repository<Product>)
    {

        // Initialize any necessary resources or dependencies here
    }
    async create(createProductDto: CreateProductDto) {
        const product = this.ProductRepository.create(createProductDto);
        const savedProduct = await this.ProductRepository.save(product);
              return { message: 'Product created successfully', 
                data: savedProduct 
            };
    }

    
    async findAll() {
        const product = await this.ProductRepository.find();
        return { message: 'Products retrieved successfully', 
                data: product 
               };
    }
}
