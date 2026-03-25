
import { Controller ,Get,Post,Put,Patch, Param,Delete,Body, UseInterceptors,
  UploadedFile, BadRequestException } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateUserDto } from './DTOs/CreateCourse.dto';
import { UpdateCourseDto } from './DTOs/UpdateCourse.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';


@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Get()
    getAllCourses() {
        return this.courseService.getAllCourses();
    }
    @Get(':id')
    getCourseById(@Param('id') id: string) {
        return this.courseService.getCourseById(id);
    }

    @Post()
    createCourse(@Body() createUserDto: CreateUserDto) {
       return this.courseService.createCourse(createUserDto);
    }

    @Put(':id')
    updateCourse(@Param('id') id: string , @Body() dto: UpdateCourseDto) {
        return this.courseService.updateCourse(id, dto);
    }
    @Patch(':id')
    patchCourse(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
        return this.courseService.patchCourse(id, dto);
    }

    @Delete(':id')
    deleteCourse(@Param('id') id: string) {
        return this.courseService.deleteCourse(id);
    }

    @Post(':id/upload')
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
        if (file.originalname.match(/^.*\.(jpg|jpeg|png|pdf)$/)) {
          cb(null, true);
        } else {
          cb(
            new BadRequestException('Only jpg, jpeg, png, pdf allowed'),
            false,
          );
        }
      },

      limits: {
        fileSize: 2 * 1024 * 1024, // 2MB
      },
    }),
  )
  uploadCourseMaterial(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.courseService.uploadCourseMaterial(id, file);
  }
}
