import { Controller, Get, Post, Req } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from './config.service';
import { Request } from 'express';

@Controller('config')
export class ConfigController {
  constructor(private configService: ConfigService) {}
  @Get()
  async findAll(): Promise<any[]> {
    const configs = await this.configService.findAll();
    return configs;
  }

  @Post()
  bulkCreateConfigs(@Req() request: Request): any {
    const elements = request.body;
    console.log(elements);

    const res = this.configService.bulkCreateConfigs(elements);
    return res;
  }
}
