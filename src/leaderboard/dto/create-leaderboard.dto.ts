import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateLeaderboardDto {
    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    gameId: number;

    @IsNotEmpty()
    score: number;

    createdAt: Date;
}
