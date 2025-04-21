import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersService } from "src/users/users.service";
import { SignupUsecase } from "./usecases/signup.usecase";
import { UsersRepository } from "src/users/repositories";
import { LocalStrategy } from "./strategies";
import { JwtModule } from "@nestjs/jwt";
import { jwtConfig } from "../config";
import { ConfigModule } from "@nestjs/config";
import { SigninUsecase } from "./usecases";
import { JwtStrategy } from "./strategies";

@Module({
  imports: [
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModule.forFeature(jwtConfig),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    UsersRepository,
    SignupUsecase,
    SigninUsecase,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AuthModule {}
