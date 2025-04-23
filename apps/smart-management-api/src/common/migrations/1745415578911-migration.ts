import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1745415578911 implements MigrationInterface {
    name = 'Migration1745415578911'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" ADD "user_id" uuid`);
        await queryRunner.query(`ALTER TABLE "devices" ADD CONSTRAINT "FK_5e9bee993b4ce35c3606cda194c" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "devices" DROP CONSTRAINT "FK_5e9bee993b4ce35c3606cda194c"`);
        await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "user_id"`);
    }

}
