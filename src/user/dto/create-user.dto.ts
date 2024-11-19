import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsOptional()
    phone?: number;

    createdAt: Date;
}
