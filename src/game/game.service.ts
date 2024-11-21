import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class GameService {
  constructor(@InjectRepository(Game) private readonly gameRepository: Repository<Game>) {}


  async create(createGameDto: CreateGameDto): Promise<{status: string, message: string, game: Game}> {
    const game = this.gameRepository.create(createGameDto);
    const savedGame = await this.gameRepository.save(game);
    return {
      status: 'success',
      message: 'Game created successfully',
      game: savedGame
    }
  }

  async findAll() {
    const game = await this.gameRepository.find();
    return {
      status: 'success',
      message: 'Game listed successfully',
      game: game
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  async remove(id: number) {
    const game = await this.gameRepository.findOne({where : {id}})
    const deleteGame = await this.gameRepository.remove(game)
    return {
      status: 'success',
      message: 'Game delete successfull',
      game: deleteGame
    }
  }
}
