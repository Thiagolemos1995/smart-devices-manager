import { CustomBaseEntity } from "../../common/interfaces";
import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { DeviceType } from "../enums/device-type.enum";
import { User } from "../../users/entities/user.entity";

@Entity("devices")
export class Device extends CustomBaseEntity {
  @ManyToOne(() => User, (user) => user.devices)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  name: string;

  @Column({ type: "enum", enum: DeviceType })
  type: DeviceType;

  @Column()
  status: string;

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
