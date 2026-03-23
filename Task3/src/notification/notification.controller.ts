import { Controller, Post,Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './DTOs/CreateNotification.dto';

@Controller('notification')
export class NotificationController {
    constructor(private notificationService: NotificationService) {}
    @Post()
    sendNotification(@Body() dto: CreateNotificationDto) {
    return this.notificationService.sendNotification(dto);
    }
    @Post('check')
  checkEnrollmentAndNotify(
    @Body() body: { studentName: string; courseId: string },
  ) {
    return this.notificationService.checkEnrollmentAndNotify(
      body.studentName,
      body.courseId,
    );
  }
}
