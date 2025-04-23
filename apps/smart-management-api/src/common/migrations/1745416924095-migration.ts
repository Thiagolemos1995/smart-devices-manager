import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1745416924095 implements MigrationInterface {
    name = 'Migration1745416924095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."devices_status_enum" AS ENUM('online', 'offline', 'error', 'warning')`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "status" "public"."devices_status_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."devices_status_enum"`);
        await queryRunner.query(`ALTER TABLE "devices" ADD "status" character varying NOT NULL`);
    }

}
