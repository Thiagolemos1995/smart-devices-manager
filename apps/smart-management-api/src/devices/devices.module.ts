import { Module } from "@nestjs/common";
import { DevicesService } from "./devices.service";
import { DevicesController } from "./devices.controller";
import { Logger } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Device } from "./entities/device.entity";
import { DevicesRepository } from "./repositories";
import {
  RegisterDeviceUsecase,
  FetchDevicesUsecase,
  FindOneDeviceUsecase,
  UpdateDeviceUsecase,
  SoftDeleteDeviceUsecase,
} from "./usecases";
import { UsersService } from "src/users/users.service";
import { UsersRepository } from "src/users/repositories";

@Module({
  imports: [TypeOrmModule.forFeature([Device])],
  controllers: [DevicesController],
  providers: [
    DevicesService,
    Logger,
    DevicesRepository,
    RegisterDeviceUsecase,
    FetchDevicesUsecase,
    FindOneDeviceUsecase,
    UpdateDeviceUsecase,
    SoftDeleteDeviceUsecase,
    UsersService,
    UsersRepository,
  ],
})
export class DevicesModule {}
