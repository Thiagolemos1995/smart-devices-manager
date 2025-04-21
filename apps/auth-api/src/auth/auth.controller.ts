import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
} from "@nestjs/common";
import { CreateUserDto } from "../common/dtos";
import { SignupUsecase } from "./usecases/signup.usecase";
import { LocalAuthGuard } from "./guards/local-auth";
import { SigninUsecase } from "./usecases";
import { JwtAuthGuard } from "./guards/jwt-auth";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly signupUsecase: SignupUsecase,
    private readonly signinUsecase: SigninUsecase
  ) {}

  @Post("signup")
  signup(@Body() createUserDto: CreateUserDto) {
    return this.signupUsecase.execute(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post("signin")
  signin(@Request() req) {
    return this.signinUsecase.execute({
      userId: req.user.id,
      name: req.user.name,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get("me")
  me(@Request() req) {
    return `This is a protected Route, Your ID is ${req.user.id}`;
  }
}
