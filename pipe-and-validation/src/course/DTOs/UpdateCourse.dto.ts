import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./CreateCourse.dto";

export class UpdateCourseDto extends PartialType(CreateUserDto) {}