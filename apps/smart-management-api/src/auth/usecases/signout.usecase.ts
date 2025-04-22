import { Injectable } from "@nestjs/common";
import { UseCase } from "src/common/interfaces";
import { AuthService } from "../auth.service";

@Injectable()
export class SignoutUsecase implements UseCase<string, void> {
  constructor(private readonly authService: AuthService) {}

  async execute(userId: string) {
    await this.authService.signout(userId);
  }
}
