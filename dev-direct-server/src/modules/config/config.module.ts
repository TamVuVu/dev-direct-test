import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Config } from 'src/models';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';

@Module({
  imports: [SequelizeModule.forFeature([Config])],
  providers: [ConfigService],
  controllers: [ConfigController],
})
export class ConfigModule {}
