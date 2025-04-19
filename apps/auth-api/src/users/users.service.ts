import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../common/dtos';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }

  async findByEmail(email: string) {
    return this.usersRepository.findByEmail(email);
  }
}
