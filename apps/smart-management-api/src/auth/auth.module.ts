import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersService } from "src/users/users.service";
import { SignupUsecase } from "./usecases/signup.usecase";
import { UsersRepository } from "src/users/repositories";
import { LocalStrategy } from "./strategies";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule } from "@nestjs/config";
import { refreshTokenUsecase, SigninUsecase } from "./usecases";
import { JwtStrategy } from "./strategies";
import jwtConfig from "src/config/jwt.config";
import refreshJwtConfig from "src/config/refresh.config";
import { RefreshStrategy } from "./strategies/refresh-token.strategy";

@Module({
  imports: [
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModule.forFeature(jwtConfig),
    ConfigModule.forFeature(refreshJwtConfig),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    UsersRepository,
    SignupUsecase,
    SigninUsecase,
    refreshTokenUsecase,
    LocalStrategy,
    JwtStrategy,
    RefreshStrategy,
  ],
})
export class AuthModule {}
