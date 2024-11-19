import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GameService {
  constructor(@InjectRepository(Game) private readonly gameRepository: Repository<Game>) {}


  async create(createGameDto: CreateGameDto) {
    const game = this.gameRepository.create(createGameDto);
    return await this.gameRepository.save(game);
  }

  findAll() {
    return this.gameRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
