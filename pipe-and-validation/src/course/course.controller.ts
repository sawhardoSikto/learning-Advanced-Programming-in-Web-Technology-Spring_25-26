import { Controller ,Get,Post,Put,Patch, Param,Delete,Body } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateUserDto } from './DTOs/CreateCourse.dto';
import { UpdateCourseDto } from './DTOs/UpdateCourse.dto';


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
}
