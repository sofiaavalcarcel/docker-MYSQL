import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        // Para ejecutar con `npm run start` desde Windows, nos conectamos
        // directamente al contenedor MySQL publicado en localhost:3307.
        // Si quieres volver a usar variables de entorno, puedes revertir
        // esto a `config.get('DB_HOST')` y `DB_PORT`.
        host: 'localhost',
        port: 3307,
        username: config.get<string>('DB_USERNAME') || 'root',
        password: config.get<string>('DB_PASSWORD') || 'root',
        database: config.get<string>('DB_NAME') || 'docker_mysqldb',
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
