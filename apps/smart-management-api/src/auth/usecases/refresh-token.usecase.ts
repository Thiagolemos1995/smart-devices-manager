import { Injectable } from "@nestjs/common";
import { IRefreshToken, UseCase } from "src/common/interfaces";
import { AuthService } from "../auth.service";

@Injectable()
export class refreshTokenUsecase implements UseCase<string, IRefreshToken> {
  constructor(private readonly authService: AuthService) {}

  async execute(userId: string, name: string): Promise<IRefreshToken> {
    return this.authService.refreshToken(userId, name);
  }
}
