import { Leaderboard } from 'src/leaderboard/leaderboard.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    email?: string;

    @Column({ nullable: true })
    phone?: number;

    @OneToMany(() => Leaderboard, (leaderboard) => leaderboard.user)
    leaderboardEntries: Leaderboard[];    

    @CreateDateColumn()
    createdAt: Date;

}
