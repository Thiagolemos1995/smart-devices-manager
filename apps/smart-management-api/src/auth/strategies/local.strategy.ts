import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { PassportStrategy } from "@nestjs/passport";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: "email" });
  }

  async validate(email: string, password: string) {
    return await this.authService.validateUser({ email, password });
  }
}
