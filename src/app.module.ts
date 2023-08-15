import { HttpException, HttpStatus, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';

import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionOptions } from './conf/db';
import { multerGlobalConfig } from './conf/multer';
import { UsuariosController } from './usuarios/usuarios.controller';
import { ConnectionOptions } from 'typeorm';
import { join } from 'path';
import { Usuario } from './usuarios/usuarios.entity';
import { UsuariosService } from './usuarios/usuarios.service';

@Module({
  imports: [
    MulterModule.register(multerGlobalConfig),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'dam_project',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Este parámetro crea automáticamente las tablas en la base de datos si no existen
    }),
    TypeOrmModule.forFeature([Usuario]), // Agrega tu entidad aquí
  ],
  controllers: [AppController, UsuariosController],
  providers: [AppService, UsuariosService],
})
export class AppModule {}
