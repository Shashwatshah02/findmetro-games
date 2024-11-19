import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';
import * as path from 'path';
import { User } from './user/user.entity';
import { Game } from './game/game.entity';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { Leaderboard } from './leaderboard/leaderboard.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'findMetro-games',
      entities: [User, Game, Leaderboard],
      // autoLoadEntities: true,
      synchronize: false,
      // logging: ['query', 'error'],
    }),
    UserModule,
    GameModule,
    LeaderboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
