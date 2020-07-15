import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('members', table => {
        table.integer('id').notNullable();
        table.integer('crewId').notNullable();
        table.integer('userId').notNullable();
        table.string('image').notNullable();
        table.string('name').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('members')
}
