import { Injectable, NotFoundException } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Device } from "../entities/device.entity";
import { CreateDeviceDto, UpdateDeviceDto } from "../dto";
import { User } from "src/users/entities/user.entity";
import { DevicesFilterDto } from "../dto/devices-filter.dto";

@Injectable()
export class DevicesRepository {
  constructor(private readonly dataSource: DataSource) {}

  async findAllDevices(payload: DevicesFilterDto): Promise<[Device[], number]> {
    const entityManager = this.dataSource.createEntityManager();

    const { order, skip, take } = payload;
    const result = await entityManager.findAndCount(Device, {
      order: {
        createdAt: order ?? "DESC",
      },
      skip,
      take,
    });

    return result;
  }

  async findDeviceById(id: string): Promise<Device> {
    const device = await this.dataSource.manager.findOne(Device, {
      where: { id },
    });

    if (!device) {
      throw new NotFoundException("Device not found");
    }

    return device;
  }

  async createDevice(payload: CreateDeviceDto, user: User): Promise<Device> {
    const entityManager = this.dataSource.createEntityManager();

    const newDevice = new Device({
      ...payload,
      user,
    });

    return await entityManager.save(Device, newDevice);
  }

  async updateDevice(id: string, payload: UpdateDeviceDto): Promise<Device> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const entityManager = queryRunner.manager;

      const existingDevice = await entityManager.findOne(Device, {
        where: { id },
      });

      if (!existingDevice) {
        throw new NotFoundException("Device not found");
      }

      entityManager.merge(Device, existingDevice, payload);

      const updatedDevice = await entityManager.save(Device, existingDevice);

      await queryRunner.commitTransaction();
      return updatedDevice;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async deleteDevice(id: string): Promise<void> {
    const device = await this.dataSource.manager.findOne(Device, {
      where: { id },
    });

    if (!device) {
      throw new NotFoundException("Device not found");
    }

    await this.dataSource.manager.softDelete(Device, id);
  }
}
