import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1745415307158 implements MigrationInterface {
    name = 'Migration1745415307158'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."devices_type_enum" AS ENUM('light', 'speaker', 'thermostat', 'opener', 'camera', 'sensor', 'other')`);
        await queryRunner.query(`CREATE TABLE "devices" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "type" "public"."devices_type_enum" NOT NULL, "status" character varying NOT NULL, "isActive" boolean NOT NULL, "battery" integer NOT NULL, "power" integer NOT NULL, "temperature" integer, CONSTRAINT "PK_b1514758245c12daf43486dd1f0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "devices"`);
        await queryRunner.query(`DROP TYPE "public"."devices_type_enum"`);
    }

}
