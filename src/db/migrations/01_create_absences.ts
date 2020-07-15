import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('absences', table => {
        table.integer('id');
        table.integer('admitterId').nullable;
        table.integer('crewId').nullable;
        table.integer('userId').nullable;
        table.string('admitterNote').nullable;
        table.string('memberNote').nullable;
        table.string('type').nullable;
        table.date('createdAt').nullable;
        table.date('rejectedAt').nullable;
        table.date('confirmedAt').nullable;
        table.date('startDate').nullable;
        table.date('endDate').nullable;
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('absences')

}
