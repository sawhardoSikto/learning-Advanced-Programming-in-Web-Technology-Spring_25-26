import { forwardRef, Inject, Injectable, } from '@nestjs/common';
import { EnrollmentService } from 'src/enrollment/enrollment.service';
import { CreateNotificationDto } from './DTOs/CreateNotification.dto';

@Injectable()
export class NotificationService {
    constructor(@Inject(forwardRef(() => EnrollmentService)) private enrollmentService: EnrollmentService) {}

    sendNotification(dto: CreateNotificationDto) {
    return {
      message: 'Notification sent',
      student: dto.studentName,
      content: dto.message,
    };
  }

    checkEnrollmentAndNotify(studentName: string, courseId: string) {
    const enrollments = this.enrollmentService.getEnrollment();
    return {
      message: 'Enrollment checked and notified',
      student: studentName,
      courseId,
      enrollments,
    };
  }
}
