import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./cerate-user.dto";

export class PartialUpdateUserDto extends PartialType(CreateUserDto) {}