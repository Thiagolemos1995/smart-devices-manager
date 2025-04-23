import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { validate } from "./common/utils/env.validation";
import serverConfig from "./config/server.config";
import databaseConfig from "./config/database.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { DevicesModule } from "./devices/devices.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      validate,
      isGlobal: true,
      load: [serverConfig],
    }),
    TypeOrmModule.forRoot(databaseConfig()),
    AuthModule,
    UsersModule,
    DevicesModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
