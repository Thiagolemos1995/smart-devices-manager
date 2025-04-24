import { CustomBaseEntity } from "../../common/interfaces";
import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { DeviceTypeEnum } from "../enums/device-type.enum";
import { User } from "../../users/entities/user.entity";
import { DeviceStatusEnum } from "../enums/device-status.enum";

@Entity("devices")
export class Device extends CustomBaseEntity {
  @ManyToOne(() => User, (user) => user.devices)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  name: string;

  @Column({ type: "enum", enum: DeviceTypeEnum })
  type: DeviceTypeEnum;

  @Column({ type: "enum", enum: DeviceStatusEnum })
  status: DeviceStatusEnum;

  @Column()
  isActive: boolean;

  @Column()
  battery: number;

  @Column()
  power: number;

  @Column({ nullable: true })
  temperature?: number;

  constructor(data: Partial<Device>) {
    super();
    Object.assign(this, data);
  }
}
