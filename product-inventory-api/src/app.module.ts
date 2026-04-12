import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProductsModule, TypeOrmModule.forRoot({
     type: "postgres",
     username: "postgres",
     password: "admin",
     port: 5432,
     host: "localhost",
     database: "test",
     synchronize: true,
     autoLoadEntities: true
   })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
