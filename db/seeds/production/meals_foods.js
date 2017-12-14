exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE foods_meals RESTART IDENTITY;')
  .then(function() {
    return Promise.all([
        knex.raw('INSERT INTO foods_meals (food_id, meal_id) VALUES (?, ?)',
          [1, 1]
        ),
        knex.raw('INSERT INTO foods_meals (food_id, meal_id) VALUES (?, ?)',
          [2, 1]
        ),
        knex.raw('INSERT INTO foods_meals (food_id, meal_id) VALUES (?, ?)',
          [3, 1]
        ),
        knex.raw('INSERT INTO foods_meals (food_id, meal_id) VALUES (?, ?)',
          [4, 2]
        ),
        knex.raw('INSERT INTO foods_meals (food_id, meal_id) VALUES (?, ?)',
          [5, 2]
        ),
        knex.raw('INSERT INTO foods_meals (food_id, meal_id) VALUES (?, ?)',
          [6, 2]
        ),
        knex.raw('INSERT INTO foods_meals (food_id, meal_id) VALUES (?, ?)',
          [7, 3]
        ),
        knex.raw('INSERT INTO foods_meals (food_id, meal_id) VALUES (?, ?)',
          [8, 3]
        ),
        knex.raw('INSERT INTO foods_meals (food_id, meal_id) VALUES (?, ?)',
          [9, 3]
        ),
        knex.raw('INSERT INTO foods_meals (food_id, meal_id) VALUES (?, ?)',
          [10, 4]
        ),
        knex.raw('INSERT INTO foods_meals (food_id, meal_id) VALUES (?, ?)',
          [11, 4]
        ),
        knex.raw('INSERT INTO foods_meals (food_id, meal_id) VALUES (?, ?)',
          [12, 4]
        )
      ])
    })
}
