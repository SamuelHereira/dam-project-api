import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const connectionOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'dam',
  password: 'dam123',
  database: 'dam_project',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Este parámetro crea automáticamente las tablas en la base de datos si no existen
  migrations: ['src/migration/*{.ts,.js}'],
};
