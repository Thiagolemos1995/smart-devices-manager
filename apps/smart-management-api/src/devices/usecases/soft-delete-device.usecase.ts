import { Injectable } from "@nestjs/common";
import { UseCase } from "src/common/interfaces";
import { DevicesService } from "../devices.service";

@Injectable()
export class SoftDeleteDeviceUsecase implements UseCase<string, void> {
  constructor(private readonly devicesService: DevicesService) {}

  async execute(id: string): Promise<void> {
    return this.devicesService.remove(id);
  }
}
