import { Injectable } from "@nestjs/common";
import { CreateUserDto, UpdateHashedRefreshTokenDto } from "../common/dtos";
import { UsersRepository } from "./repositories/users.repository";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }

  async findById(id: string) {
    return this.usersRepository.findById(id);
  }

  async findByEmail(email: string) {
    return this.usersRepository.findByEmail(email);
  }

  async updateHashedRefreshToken(payload: UpdateHashedRefreshTokenDto) {
    return this.usersRepository.updateHashedRefreshToken(payload);
  }
}
