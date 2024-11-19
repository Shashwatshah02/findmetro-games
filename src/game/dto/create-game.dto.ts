import { IsNotEmpty, IsString } from "class-validator";

export class CreateGameDto {
    @IsString()
    @IsNotEmpty()
    game_name: string;

    createdAt: Date;
}
