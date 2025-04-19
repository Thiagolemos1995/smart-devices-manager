import { DataSource } from 'typeorm';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { User } from '../entities';
import { CreateUserDto } from '../../common/dtos';
import { hash } from 'argon2';

@Injectable()
export class UsersRepository {
  constructor(private readonly dataSource: DataSource) {}

  async create(payload: CreateUserDto): Promise<User> {
    const em = this.dataSource.createEntityManager();

    const { password, ...user } = payload;
    const hashedPassword = await hash(password);

    try {
      const entity = new User({
        name: user.name,
        email: user.email,
        password: hashedPassword,
      });

      return em.save(entity);
    } catch (error: unknown) {
      throw new InternalServerErrorException(error);
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    const em = this.dataSource.createEntityManager();
    return em.findOne(User, { where: { email } });
  }
}
