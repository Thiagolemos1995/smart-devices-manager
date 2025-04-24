import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { CreateDeviceDto, DevicesResponse, UpdateDeviceDto } from "./dto";
import { UsersService } from "src/users/users.service";
import { DevicesRepository } from "./repositories";
import { Device } from "./entities/device.entity";
import { DevicesFilterDto } from "./dto/devices-filter.dto";
import { User } from "src/users/entities/user.entity";

@Injectable()
export class DevicesService {
  constructor(
    private readonly userService: UsersService,
    private readonly devicesRepository: DevicesRepository,
    private readonly logger: Logger = new Logger(DevicesService.name)
  ) {}

  async registerDevice(
    createDeviceDto: CreateDeviceDto
  ): Promise<Omit<Device, "user">> {
    this.logger.log("Registering device...");
    try {
      const user = await this.userService.findById(createDeviceDto.userId);

      if (!user) {
        this.logger.error("User not found while registering device");
        throw new NotFoundException("User not found");
      }

      const device = await this.devicesRepository.createDevice(
        createDeviceDto,
        user
      );

      this.logger.log(
        `Device registered successfully ${device.id} for user ${user.id}`
      );

      return {
        id: device.id,
        name: device.name,
        type: device.type,
        status: device.status,
        isActive: device.isActive,
        createdAt: device.createdAt,
        updatedAt: device.updatedAt,
        battery: device.battery,
        power: device.power,
        temperature: device.temperature,
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async findAll(
    payload: DevicesFilterDto,
    user: User
  ): Promise<DevicesResponse> {
    this.logger.log(
      `Finding all devices with filters: ${JSON.stringify(payload)}`
    );
    const { order = "DESC", skip = 0, take = 10 } = payload;

    try {
      const devices = await this.devicesRepository.findAllDevices(
        {
          order,
          skip,
          take,
        },
        user
      );

      const result = new DevicesResponse({
        metadata: {
          take,
          skip,
          order,
          count: devices[1],
        },
        data: devices[0],
      });

      this.logger.log(`Found ${devices[1]} devices`);
      return result;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async findOne(id: string) {
    this.logger.log(`Finding device ${id}`);
    try {
      const device = await this.devicesRepository.findDeviceById(id);
      this.logger.log(`Device ${id} found successfully`);
      return device;
    } catch (error) {
      this.logger.error(`Error finding device ${id}`, error);
      throw error;
    }
  }

  async update(id: string, updateDeviceDto: UpdateDeviceDto) {
    this.logger.log(
      `Updating device ${id} with payload: ${JSON.stringify(updateDeviceDto)}`
    );

    try {
      const result = await this.devicesRepository.updateDevice(
        id,
        updateDeviceDto
      );

      this.logger.log(`Device ${id} updated successfully`);
      return result;
    } catch (error) {
      this.logger.error(`Error updating device ${id}`, error);
      throw error;
    }
  }

  async remove(id: string) {
    this.logger.log(`Removing device ${id}`);
    try {
      await this.devicesRepository.deleteDevice(id);
      this.logger.log(`Device ${id} removed successfully`);
    } catch (error) {
      this.logger.error(`Error removing device ${id}`, error);
      throw error;
    }
  }
}
