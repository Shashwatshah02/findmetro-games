import { Game } from 'src/game/game.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'leaderboard' })
export class Leaderboard {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.leaderboardEntries, { eager: true })
    @JoinColumn({ name: 'userId' })
    user: User;
  
    @ManyToOne(() => Game, (game) => game.leaderboardEntries, { eager: true })
    @JoinColumn({ name: 'gameId' })
    game: Game;

    @Column()
    score: number;

    @CreateDateColumn()
    createdAt: Date;

}
