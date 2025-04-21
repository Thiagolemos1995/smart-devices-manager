import { Injectable } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { UseCase } from "src/common/interfaces";

@Injectable()
export class SigninUsecase
  implements
    UseCase<
      { userId: string; name: string },
      { id: string; name: string; accessToken: string }
    >
{
  constructor(private readonly authService: AuthService) {}

  async execute(payload: {
    userId: string;
    name: string;
  }): Promise<{ id: string; name: string; accessToken: string }> {
    return this.authService.login(payload);
  }
}
