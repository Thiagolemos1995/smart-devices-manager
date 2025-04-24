import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsNumber,
  IsEnum,
  IsOptional,
} from "class-validator";
import { DeviceTypeEnum } from "../enums/device-type.enum";
import { DeviceStatusEnum } from "../enums/device-status.enum";

export class CreateDeviceDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(DeviceTypeEnum)
  type: DeviceTypeEnum;

  @IsNotEmpty()
  @IsEnum(DeviceStatusEnum)
  status: DeviceStatusEnum;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @IsNotEmpty()
  @IsNumber()
  battery: number;

  @IsNotEmpty()
  @IsNumber()
  power: number;

  @IsNotEmpty()
  @IsNumber()
  temperature: number;

  @IsOptional()
  @IsString()
  userId: string;
}
