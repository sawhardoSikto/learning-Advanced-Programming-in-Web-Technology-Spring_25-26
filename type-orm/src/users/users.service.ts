import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { CreateUserDto } from 'src/DTOs/cerate-user.dto';
import { PartialUpdateUserDto } from 'src/DTOs/partialupdate-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) {}
    async create(createUserDto: CreateUserDto,imageUrl: string): Promise<Users> {
        const user = this.usersRepository.create({
            ...createUserDto,
            imageUrl
        });
        return this.usersRepository.save(user);
    }
    async getAll(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    async getById(id: number): Promise<Users> {
        const user = await this.usersRepository.findOne({ where: { id :id} });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    async delete(id: number): Promise<string> {
        const user: Users | null = await this.getById(id);

        if (!user) {
            throw new Error('User not found');
        }else
        {

            await this.usersRepository.remove(user);
        }
        return 'User deleted successfully';
    }

    async update(id: number, updateUserDto: CreateUserDto,imageUrl: string): Promise<Users> 
    {
        const existingUser: Users | null = await this.getById(id);

        if (!existingUser) {
            throw new Error('User not found');
        }
        const updatedUser = this.usersRepository.create({
            id,
            ...updateUserDto,
            imageUrl
        });
        return this.usersRepository.save(updatedUser);
    }

    async partialUpdate(id: number, partialUpdateUserDto: PartialUpdateUserDto): Promise<Users> {
        const existingUser: Users | null = await this.getById(id);
        if (!existingUser) 
            {
                throw new BadRequestException('User not found');
            }
            else 
            {
                const updateUser = this.usersRepository.merge(existingUser, partialUpdateUserDto);
                return this.usersRepository.save(updateUser);
            }
        }

}
