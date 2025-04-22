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
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
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
    const { accessToken, refreshToken } = await this.generateTokens(userId);

    return {
      id: userId,
      name,
      accessToken,
      refreshToken,
    };
  }

  async generateTokens(userId: string) {
    const payload: AuthJwtPayload = { sub: userId };

    const jwtRefreshConfig = this.configService.get<string>(
      "REFRESH_TOKEN_SECRET"
    );
    const jwtRefreshExpiresIn = this.configService.get<string>(
      "REFRESH_TOKEN_EXPIRES_IN"
    );

    console.log(jwtRefreshConfig, jwtRefreshExpiresIn);

    if (!jwtRefreshConfig || !jwtRefreshExpiresIn) {
      throw new Error("Refresh token config is not set");
    }

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, {
        secret: jwtRefreshConfig,
        expiresIn: jwtRefreshExpiresIn,
      }),
    ]);

    return { accessToken, refreshToken };
  }

  async validateJwtUser(userId: string) {
    const user = await this.usersService.findById(userId);

    if (!user) throw new UnauthorizedException("User not found");

    const currentUser = {
      id: user.id,
    };

    return currentUser;
  }

  async validateRefreshToken(userId: string) {
    const user = await this.usersService.findById(userId);

    if (!user) throw new UnauthorizedException("User not found");

    const currentUser = {
      id: user.id,
    };

    return currentUser;
  }

  async refreshToken(userId: string, name: string) {
    const { accessToken, refreshToken } = await this.generateTokens(userId);

    return {
      id: userId,
      name,
      accessToken,
      refreshToken,
    };
  }
}
