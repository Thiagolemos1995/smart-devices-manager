import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { PassportStrategy } from "@nestjs/passport";
import { LoginDto } from "src/common/dtos";

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: "email" });
  }

  async validate(payload: LoginDto) {
    return await this.authService.validateUser(payload);
  }
}
