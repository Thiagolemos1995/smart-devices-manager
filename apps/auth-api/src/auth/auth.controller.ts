import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Req,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../common/dtos";
import { SignupUsecase } from "./usecases/signup.usecase";
import { LocalAuthGuard } from "./guards/local-auth";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly signupUsecase: SignupUsecase
  ) {}

  @Post("signup")
  signup(@Body() createUserDto: CreateUserDto) {
    return this.signupUsecase.execute(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post("signin")
  signin(@Request() req) {
    return req.user;
  }
}
