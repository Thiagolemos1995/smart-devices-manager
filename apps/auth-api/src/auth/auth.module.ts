import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { SignupUsecase } from './usecases/signup.usecase';
import { UsersRepository } from 'src/users/repositories';
@Module({
  controllers: [AuthController],
  providers: [AuthService, UsersService, UsersRepository, SignupUsecase],
})
export class AuthModule {}
