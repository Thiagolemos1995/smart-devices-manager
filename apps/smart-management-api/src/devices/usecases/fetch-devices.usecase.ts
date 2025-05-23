import { Injectable } from "@nestjs/common";
import { UseCase } from "src/common/interfaces";
import { DevicesService } from "../devices.service";
import { DevicesResponse, DevicesFilterDto } from "../dto";
import { User } from "src/users/entities/user.entity";

@Injectable()
export class FetchDevicesUsecase
  implements UseCase<DevicesFilterDto, DevicesResponse>
{
  constructor(private readonly devicesService: DevicesService) {}

  async execute(
    payload: DevicesFilterDto,
    user: User
  ): Promise<DevicesResponse> {
    return await this.devicesService.findAll(payload, user);
  }
}
