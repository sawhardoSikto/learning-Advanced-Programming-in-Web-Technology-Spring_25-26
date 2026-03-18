import { Module } from '@nestjs/common';
import { EnrollmentController } from './enrollment.controller';
import { EnrollmentService } from './enrollment.service';
import { CourseService } from 'src/course/course.service';
import { CourseModule } from 'src/course/course.module';

@Module({
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  imports: [CourseModule]
})
export class EnrollmentModule {}
