import { Injectable } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';
import { CreateEnrollmentDto } from './DTOs/CreateEnrollment.dto';
@Injectable()
export class EnrollmentService {
    constructor(private CourseService: CourseService) {}

    getEnrollment()
    {
       return { message: 'All enrollments fetched',
                data: []
              };
        
    }
    
    enrollmentStudent(dto:CreateEnrollmentDto)
    {
        const course = this.CourseService.getCourseById(dto.courseId);
        return{
            message:"course enrollment successfully",
            course: course,
            StudentName: dto.studentName
        };
    }
}
