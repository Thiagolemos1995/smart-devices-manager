import { Injectable } from "@nestjs/common";
import { DevicesService } from "../devices.service";
import { UseCase } from "src/common/interfaces";
import { Device } from "../entities/device.entity";

@Injectable()
export class FindOneDeviceUsecase implements UseCase<string, Device> {
  constructor(private readonly devicesService: DevicesService) {}

  async execute(id: string): Promise<Device> {
    return await this.devicesService.findOne(id);
  }
}
