import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto, LoginDto } from '../common/dtos';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signup(createUserDto: CreateUserDto) {
    const user = await this.usersService.findByEmail(createUserDto.email);

    if (user) {
      throw new ConflictException('User already exists');
    }

    return this.usersService.create(createUserDto);
  }

  signin(loginDto: LoginDto) {
    console.log(loginDto);
    throw new Error('Not implemented', { cause: 501 });
  }
}
