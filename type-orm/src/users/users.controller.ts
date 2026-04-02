import { BadRequestException, Controller, Delete,Put, Get, Param, ParseIntPipe, Patch, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { Post, UseInterceptors,Body } from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateUserDto } from 'src/DTOs/cerate-user.dto';
import { UpdateUserDto } from 'src/DTOs/update-user.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

      @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename = Date.now() + '-' + file.originalname;
          cb(null, filename);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/^.*\.(jpg|jpeg|pdf)$/)) {
          cb(null, true);
        } else {
          cb(
            new BadRequestException('only image files and pdf are accepted'),
            false,
          );
        }
      },

      limits: {
        fileSize: 3 * 1024 * 1024,
      },
    }),
  )
createUser(
    @Body() createUserDto: CreateUserDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.usersService.create(createUserDto, file.filename);
  } 

  @Get()
    getAllUsers() {
        return this.usersService.getAll();
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.usersService.delete(id);
    }

    @Put(':id')
    @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename = Date.now() + '-' + file.originalname;
          cb(null, filename);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/^.*\.(jpg|jpeg|pdf)$/)) {
          cb(null, true);
        } else {
          cb(
            new BadRequestException('only image files and pdf are accepted'),
            false,
          );
        }
      },

      limits: {
        fileSize: 3 * 1024 * 1024,
      },
    }),
  )
 updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.usersService.update( id,updateUserDto, file.filename);
  }

  @Patch(':id')
partialUpdateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() partialUpdateUserDto: Partial<UpdateUserDto>,
  ) {
    return this.usersService.partialUpdate(id, partialUpdateUserDto);
  }

}
