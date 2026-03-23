import { Controller, Get, Post,Body } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentDto } from './DTOs/CreateEnrollment.dto';

@Controller('enrollment')
export class EnrollmentController {
    constructor(private enrollmentService: EnrollmentService){}
    
    @Get()
    getEnrollment()
    {
       return this.enrollmentService.getEnrollment();
    }
    @Post()
    createEnrollment(@Body() dto:CreateEnrollmentDto)
    {
        return this.enrollmentService.enrollmentStudent(dto)
    }
}
