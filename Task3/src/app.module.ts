import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';

import { FilesModule } from './files/files.module';
import { NotificationModule } from './notification/notification.module';
import { EnrollmentModule } from './enrollment/enrollment.module';


@Module({
  imports: [CourseModule, FilesModule, NotificationModule, EnrollmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
