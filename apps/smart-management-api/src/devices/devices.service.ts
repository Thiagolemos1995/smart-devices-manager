import { Injectable, Logger } from "@nestjs/common";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { UpdateDeviceDto } from "./dto/update-device.dto";
import { Device } from "./entities/device.entity";

@Injectable()
export class DevicesService {
  constructor(
    private readonly logger: Logger = new Logger(DevicesService.name)
  ) {}

  registerDevice(createDeviceDto: CreateDeviceDto) {
    return "This action adds a new device";
  }

  findAll() {
    return `This action returns all devices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} device`;
  }

  update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return `This action updates a #${id} device`;
  }

  remove(id: number) {
    return `This action removes a #${id} device`;
  }
}
