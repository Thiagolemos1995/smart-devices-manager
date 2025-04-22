import { DataSource } from "typeorm";
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { User } from "../entities";
import { CreateUserDto, UpdateHashedRefreshTokenDto } from "../../common/dtos";
import { hash } from "argon2";

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

  async findById(id: string): Promise<User | null> {
    const em = this.dataSource.createEntityManager();
    return em.findOne(User, { where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    const em = this.dataSource.createEntityManager();
    return em.findOne(User, { where: { email } });
  }

  async updateHashedRefreshToken(payload: UpdateHashedRefreshTokenDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const entityManager = queryRunner.manager;

      const user = await entityManager.findOne(User, {
        where: { id: payload.userId },
      });

      if (!user) {
        throw new NotFoundException("User not found");
      }

      entityManager.merge(User, user, {
        hashedRefreshToken: payload.hashedRefreshToken ?? null,
      });

      const updatedUser = await entityManager.save(user);
      await queryRunner.commitTransaction();

      return updatedUser;
    } catch (error: unknown) {
      await queryRunner.rollbackTransaction();

      throw new InternalServerErrorException(error);
    } finally {
      await queryRunner.release();
    }
  }
}
