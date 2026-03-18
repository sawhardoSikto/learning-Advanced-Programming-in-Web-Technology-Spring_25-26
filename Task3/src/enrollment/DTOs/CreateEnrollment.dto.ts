import { IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateEnrollmentDto {
    @IsString()
    @IsNotEmpty()
    studentName!: string;

    @IsString()
    @IsNotEmpty()
    courseId!: string;


}