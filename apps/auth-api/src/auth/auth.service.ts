import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto, LoginDto } from "../common/dtos";
import { UsersService } from "src/users/users.service";
import { verify } from "argon2";
import { AuthJwtPayload } from "./types/auth/auth-jwtPayload";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

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

  async login(payload: { userId: string; name: string }) {
    const { userId, name } = payload;
    const { accessToken } = await this.generateTokens(userId);

    return {
      id: userId,
      name,
      accessToken,
    };
  }

  async generateTokens(userId: string) {
    const payload: AuthJwtPayload = { sub: userId };

    const [accessToken] = await Promise.all([
      this.jwtService.signAsync(payload),
    ]);

    return { accessToken };
  }

  async validateJwtUser(userId: string) {
    const user = await this.usersService.findById(userId);

    if (!user) throw new UnauthorizedException("User not found");

    const currentUser = {
      id: user.id,
    };

    return currentUser;
  }
}
