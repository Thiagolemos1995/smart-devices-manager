import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
} from "@nestjs/common";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { UpdateDeviceDto } from "./dto/update-device.dto";
import {
  RegisterDeviceUsecase,
  FetchDevicesUsecase,
  FindOneDeviceUsecase,
  UpdateDeviceUsecase,
  SoftDeleteDeviceUsecase,
} from "./usecases";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth";
import { DevicesFilterDto } from "./dto";

@Controller("devices")
export class DevicesController {
  constructor(
    private readonly registerDeviceUsecase: RegisterDeviceUsecase,
    private readonly fetchDevicesUsecase: FetchDevicesUsecase,
    private readonly findOneDeviceUsecase: FindOneDeviceUsecase,
    private readonly updateDeviceUsecase: UpdateDeviceUsecase,
    private readonly softDeleteDeviceUsecase: SoftDeleteDeviceUsecase
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post("register")
  async registerDevice(
    @Request() req,
    @Body() createDeviceDto: CreateDeviceDto
  ) {
    createDeviceDto.userId = req.user.id;
    const response = await this.registerDeviceUsecase.execute(createDeviceDto);

    return {
      message: "Device registered successfully",
      data: response,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Query() query: DevicesFilterDto, @Request() req) {
    return await this.fetchDevicesUsecase.execute(query, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.findOneDeviceUsecase.execute(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateDeviceDto: UpdateDeviceDto
  ) {
    return await this.updateDeviceUsecase.execute(id, updateDeviceDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.softDeleteDeviceUsecase.execute(id);
  }
}
