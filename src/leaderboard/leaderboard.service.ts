import { Injectable } from '@nestjs/common';
import { CreateLeaderboardDto } from './dto/create-leaderboard.dto';
import { UpdateLeaderboardDto } from './dto/update-leaderboard.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from 'src/game/game.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { Leaderboard } from './leaderboard.entity';

@Injectable()
export class LeaderboardService {
  constructor(
    @InjectRepository(Leaderboard)
    private leaderboardRepository: Repository<Leaderboard>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) { }

  async create(createLeaderboardDto: CreateLeaderboardDto) {
    const { userId, gameId, score } = createLeaderboardDto;

    const user = await this.userRepository.findOneBy({ id: userId });
    const game = await this.gameRepository.findOneBy({ id: gameId });

    if (!user || !game) {
      throw new Error('User or Game not found');
    }
    const leaderboardEntry = this.leaderboardRepository.create({
      user,
      game,
      score,
    });
    return await this.leaderboardRepository.save(leaderboardEntry);
  }

  findAll() {
    return this.leaderboardRepository.find();
  }

  async findGameLeaderboard(gameId: number) {
    return await this.leaderboardRepository.find({ where: { game: {id: gameId} }, order: { score: 'DESC' }, relations: ['user', 'game'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} leaderboard`;
  }

  update(id: number, updateLeaderboardDto: UpdateLeaderboardDto) {
    return `This action updates a #${id} leaderboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} leaderboard`;
  }
}
