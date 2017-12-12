exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('foods', function(table){
      table.increments('id').primary();
      table.string('name');
      table.string('calories');
    }),
    knex.schema.createTable('foods_meals', function(table){
      table.increments('id').primary();
      table.integer('food_id').references('foods.id');
      table.integer('meal_id').references('meals.id');
    }),
    knex.schema.createTable('meals', function(table){
      table.increments('id').primary();
      table.string('name');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('foods'),
    knex.schema.dropTable('foods_meals'),
    knex.schema.dropTable('meals')
  ]);
};
