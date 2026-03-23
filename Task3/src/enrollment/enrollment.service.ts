import { forwardRef, Injectable,Inject } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';
import { CreateEnrollmentDto } from './DTOs/CreateEnrollment.dto';
import { NotificationService } from 'src/notification/notification.service';
@Injectable()
export class EnrollmentService {
    constructor(private CourseService: CourseService, @Inject(forwardRef(() => NotificationService)) private NotificationService: NotificationService) {}

    getEnrollment()
    {
       return { message: 'All enrollments fetched',
                data: []
              };
        
    }
    
    enrollmentStudent(dto:CreateEnrollmentDto)
    {
        const course = this.CourseService.getCourseById(dto.courseId);
        const enrollment = this.NotificationService.sendNotification({
            studentName: dto.studentName,
            message: `You have been enrolled}`,
        });
        return {
            message:"course enrollment successfully",
            course: course,
            StudentName: dto.studentName
        };
    }
}
