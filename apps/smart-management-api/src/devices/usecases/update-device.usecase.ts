import { Injectable } from "@nestjs/common";
import { DevicesService } from "../devices.service";
import { UseCase } from "src/common/interfaces";
import { UpdateDeviceDto } from "../dto/update-device.dto";
import { Device } from "../entities/device.entity";

@Injectable()
export class UpdateDeviceUsecase implements UseCase<string, UpdateDeviceDto> {
  constructor(private readonly devicesService: DevicesService) {}

  async execute(id: string, updateDeviceDto: UpdateDeviceDto): Promise<Device> {
    return this.devicesService.update(id, updateDeviceDto);
  }
}
