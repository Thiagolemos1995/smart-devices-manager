import { CustomBaseEntity } from "../../common/interfaces";
import { Entity, Column, OneToMany } from "typeorm";
import { Device } from "../../devices/entities/device.entity";

@Entity("users")
export class User extends CustomBaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: "varchar", nullable: true })
  hashedRefreshToken: string | null;

  @OneToMany(() => Device, (device) => device.user)
  devices: Device[];

  constructor(data: Partial<User>) {
    super();
    Object.assign(this, data);
  }
}
