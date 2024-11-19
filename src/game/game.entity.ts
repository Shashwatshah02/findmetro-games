import { Leaderboard } from 'src/leaderboard/leaderboard.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity({ name: 'games' })
export class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    game_name: string;

    @OneToMany(() => Leaderboard, (leaderboard) => leaderboard.game)
    leaderboardEntries: Leaderboard[];

    @CreateDateColumn()
    createdAt: Date;

}
