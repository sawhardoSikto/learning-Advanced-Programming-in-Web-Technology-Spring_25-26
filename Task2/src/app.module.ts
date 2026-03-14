import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';

import { FilesModule } from './files/files.module';


@Module({
  imports: [CourseModule, FilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
