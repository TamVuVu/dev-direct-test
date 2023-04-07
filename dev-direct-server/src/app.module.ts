import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Config } from './models';
import { ConfigModule } from './modules/config/config.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      //Replace your username and password here
      username: 'root',
      password: '123456',
      database: 'dev_direct',
      models: [Config],
      synchronize: true,
    }),
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
