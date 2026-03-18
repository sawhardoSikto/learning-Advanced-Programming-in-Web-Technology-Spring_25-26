import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './DTOs/CreateCourse.dto';
import { UpdateCourseDto } from './DTOs/UpdateCourse.dto';

@Injectable()
export class CourseService {
    getAllCourses() : object {
        return {
            message: "Get All Courses - from Service",
            data: []
        }
}
    getCourseById(id: string) : string {
        return `Get Course with ID: ${id} - from Service `;
    }
    createCourse(dto: CreateUserDto) : object {
        return {
            message: "Create Course - from Service",
            data: dto
        }
    }
    updateCourse(id: string, dto: UpdateCourseDto) : object {
        return {
            message: `Update Course with ID: ${id} - from Service`,
            data: dto
        };
    }
    patchCourse(id: string, dto: UpdateCourseDto) : object {
        return {
            message: `Patch Course with ID: ${id} - from Service`,
            data: dto
        }
    }
    deleteCourse(id:string) : string {
        return `Delete Course ${id} - from Service`;
    }

}

