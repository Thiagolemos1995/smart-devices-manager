import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersService } from "src/users/users.service";
import { SignupUsecase } from "./usecases/signup.usecase";
import { UsersRepository } from "src/users/repositories";
import { LocalStrategy } from "./strategies";

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    UsersRepository,
    SignupUsecase,
    LocalStrategy,
  ],
})
export class AuthModule {}
