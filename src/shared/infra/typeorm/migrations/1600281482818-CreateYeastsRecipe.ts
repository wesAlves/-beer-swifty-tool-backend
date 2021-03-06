import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateYeastsRecipe1600281482818 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "yeasts_recipe",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },

                    {
                        name: "yeast_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "quantity",
                        type: "decimal",
                        isNullable: true,
                    },
                    {
                        name: "attenuation",
                        type: "decimal",
                        isNullable: true,
                    },
                    {
                        name: "cells_quantity",
                        type: "decimal",
                        isNullable: true,
                    },
                    {
                        name: "manufacture",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "floculation",
                        type: "decimal",
                        isNullable: true,
                    },
                    {
                        name: "recipe_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "starter",
                        type: "boolean",
                        default: false,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("yeasts_recipe");
    }
}
