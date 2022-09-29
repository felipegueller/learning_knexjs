import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  const exists = await knex.schema.hasTable('users')
  if (exists) return

  return knex.schema.createTable('users', table => {
    table.increments('id').primary().notNullable()
    table.string('username').unique().notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}


export async function down(knex: Knex): Promise<void> {
}

