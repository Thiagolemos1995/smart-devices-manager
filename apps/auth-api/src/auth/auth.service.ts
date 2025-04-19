import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto, LoginDto } from "../common/dtos";
import { UsersService } from "src/users/users.service";
import { verify } from "argon2";

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signup(createUserDto: CreateUserDto) {
    const user = await this.usersService.findByEmail(createUserDto.email);

    if (user) {
      throw new ConflictException("User already exists");
    }

    return this.usersService.create(createUserDto);
  }

  async validateUser(payload: LoginDto) {
    const { email, password } = payload;
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException("User not found");

    const isPasswordValid = await verify(user.password, password);
    if (!isPasswordValid)
      throw new UnauthorizedException("Invalid credentials");

    return {
      id: user.id,
      name: user.name,
    };
  }
}
