import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "../auth.service";
import { AuthJwtPayload } from "../types/auth/auth-jwtPayload";

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, "refresh-jwt") {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService
  ) {
    const jwtRefreshConfig = configService.get<string>("REFRESH_TOKEN_SECRET");

    if (!jwtRefreshConfig) {
      throw new Error("REFRESH_TOKEN_SECRET is not set");
    }

    super({
      jwtFromRequest: ExtractJwt.fromBodyField("refresh"),
      secretOrKey: jwtRefreshConfig,
      ignoreExpiration: false,
    });
  }

  //request.user
  async validate(payload: AuthJwtPayload) {
    const userId = payload.sub;
    return this.authService.validateRefreshToken(userId);
  }
}
