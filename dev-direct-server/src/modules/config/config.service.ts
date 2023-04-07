import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Config } from 'src/models';

@Injectable()
export class ConfigService {
  constructor(
    @InjectModel(Config)
    private configModel: typeof Config,
  ) {}

  async findAll(): Promise<Config[]> {
    return this.configModel.findAll({ order: ['createdAt'] });
  }

  async bulkCreateConfigs(configs: any[]): Promise<Config[]> {
    return this.configModel.bulkCreate(configs, {
      updateOnDuplicate: ['props'],
    });
  }
}
