import { Controller ,Get,Post,Put,Patch, Param,Delete,Body } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateUserDto } from './DTOs/CreateCourse.dto';


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
        return `Create Course - from Controller with data: ${JSON.stringify(createUserDto)}`;
    }

    @Put(':id')
    updateCourse(@Param('id') id: string) {
        return this.courseService.updateCourse(id);
    }

    @Delete(':id')
    deleteCourse(@Param('id') id: string) {
        return this.courseService.deleteCourse(id);
    }
}
