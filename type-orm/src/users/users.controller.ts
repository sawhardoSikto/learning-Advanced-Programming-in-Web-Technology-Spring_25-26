import { BadRequestException, Controller, Get, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { Post, UseInterceptors,Body } from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateUserDto } from 'src/DTOs/cerate-user.dto';


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
}
