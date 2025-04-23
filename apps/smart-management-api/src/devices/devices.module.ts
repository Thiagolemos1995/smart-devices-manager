import { Module } from "@nestjs/common";
import { DevicesService } from "./devices.service";
import { DevicesController } from "./devices.controller";
import { Logger } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Device } from "./entities/device.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Device])],
  controllers: [DevicesController],
  providers: [DevicesService, Logger],
})
export class DevicesModule {}
