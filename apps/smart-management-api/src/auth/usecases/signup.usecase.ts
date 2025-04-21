import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/common/dtos';
import { User } from 'src/users/entities/user.entity';
import { UseCase } from 'src/common/interfaces';
import { AuthService } from '../auth.service';

@Injectable()
export class SignupUsecase implements UseCase<CreateUserDto, User> {
  constructor(private readonly authService: AuthService) {}

  async execute(payload: CreateUserDto): Promise<User> {
    return this.authService.signup(payload);
  }
}
