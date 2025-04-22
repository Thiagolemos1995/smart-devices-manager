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
import { RefreshAuthGuard } from "./guards/refresh-auth/refresh-auth.guard";
import { refreshTokenUsecase } from "./usecases/refresh-token.usecase";
import { SignoutUsecase } from "./usecases/signout.usecase";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly signupUsecase: SignupUsecase,
    private readonly signinUsecase: SigninUsecase,
    private readonly refreshTokenUsecase: refreshTokenUsecase,
    private readonly signoutUsecase: SignoutUsecase
  ) {}

  @Post("signup")
  signup(@Body() createUserDto: CreateUserDto) {
    return this.signupUsecase.execute(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post("signin")
  signin(@Request() req: { user: { id: string; name: string } }) {
    return this.signinUsecase.execute({
      userId: req.user.id,
      name: req.user.name,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get("me")
  me(@Request() req: { user: { id: string; name: string } }) {
    return `This is a protected Route, Your ID is ${req.user.id}`;
  }

  @UseGuards(RefreshAuthGuard)
  @Post("refresh")
  async refresh(@Request() req: { user: { id: string; name: string } }) {
    return this.refreshTokenUsecase.execute(req.user.id, req.user.name);
  }

  @UseGuards(JwtAuthGuard)
  @Post("signout")
  signout(@Request() req: { user: { id: string } }) {
    return this.signoutUsecase.execute(req.user.id);
  }
}
