import { Injectable } from "@nestjs/common";
import { DevicesService } from "../devices.service";
import { UseCase } from "src/common/interfaces";
import { CreateDeviceDto } from "../dto";
import { Device } from "../entities/device.entity";
import { DataSource } from "typeorm";

@Injectable()
export class RegisterDeviceUsecase
  implements UseCase<CreateDeviceDto, Omit<Device, "user">>
{
  constructor(
    private readonly deviceService: DevicesService,
    private readonly dataSource: DataSource
  ) {}

  async execute(payload: CreateDeviceDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const result = await this.deviceService.registerDevice(payload);
      await queryRunner.commitTransaction();
      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
