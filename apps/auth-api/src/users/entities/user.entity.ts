import { CustomBaseEntity } from '../../common/interfaces';
import { Entity, Column } from 'typeorm';

@Entity('users')
export class User extends CustomBaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  constructor(data: Partial<User>) {
    super();
    Object.assign(this, data);
  }
}
