exports.up = function (knex) {
  return knex.schema.createTable('ingredients', function (table) {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.float('quantity').notNullable()
    table.string('unit').notNullable()
    table
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('ingredients')
}
