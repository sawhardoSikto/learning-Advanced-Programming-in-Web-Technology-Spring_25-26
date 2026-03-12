import { Type } from "class-transformer";
import { IsString,IsNotEmpty,MinLength,MaxLength,IsEmail,IsInt,Matches, IsNumber, Min, Max, IsOptional } from "class-validator";


export class CreateUserDto {
 @IsString()
 @IsNotEmpty()
 name!: string;

 @IsString()
 @IsNotEmpty()
 code!: string;

 @IsString()
 @IsNotEmpty()
 instructor!: string;

 
 @IsNumber()
 @Min(1)
 @Max(6)
 credits!: number;

 @IsOptional()
 @IsString()
 @Type(() => Number)
 description?: string;
}