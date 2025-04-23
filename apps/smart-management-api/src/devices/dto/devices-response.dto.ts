import { IMetadata } from "src/common/interfaces";
import { Device } from "../entities/device.entity";

export class DevicesResponse {
  metadata: IMetadata;
  data: Device[];

  constructor(data: Partial<DevicesResponse>) {
    Object.assign(this, data);
  }
}
