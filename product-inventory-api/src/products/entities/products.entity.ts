import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name!: string;
  @Column({ nullable: true })
  description?: string;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price!: number;
  @Column({ default: 0 })
  stock!: number;
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  category!: string | null;
  @Column({ default: true })
  isActive!: boolean;
  @CreateDateColumn()
  createdAt!: Date;
  @UpdateDateColumn()
  updatedAt!: Date;
}
