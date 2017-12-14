exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE foods RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('foods').insert([
        {name: 'Banana', calories: 150},
        {name: 'Bagel Bites - Four Cheese', calories: 650},
        {name: 'Chicken Burrito', calories: 800},
        {name: 'Grapes', calories: 180},
        {name: 'Blueberry Muffins', calories: 450},
        {name: 'Yogurt', calories: 550},
        {name: 'Macaroni and Cheese', calories: 950},
        {name: 'Granola Bar', calories: 200},
        {name: 'Gum', calories: 50},
        {name: 'Cheese', calories: 400},
        {name: 'Fruit Snacks', calories: 120},
        {name: 'Apple', calories: 220}
      ])
    })
}

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE foods RESTART IDENTITY CASCADE;')
  .then(function() {
    return Promise.all([
        knex.raw('INSERT INTO foods (name, calories) VALUES (?, ?)',
          ['Banana', 150]
        ),
        knex.raw('INSERT INTO foods (name, calories) VALUES (?, ?)',
          ['Bagel Bites - Four Cheese', 650]
        ),
        knex.raw('INSERT INTO foods (name, calories) VALUES (?, ?)',
          ['Chicken Burrito', 800]
        ),
        knex.raw('INSERT INTO foods (name, calories) VALUES (?, ?)',
          ['Grapes', 180]
        ),
        knex.raw('INSERT INTO foods (name, calories) VALUES (?, ?)',
          ['Blueberry Muffins', 450]
        ),
        knex.raw('INSERT INTO foods (name, calories) VALUES (?, ?)',
          ['Yogurt', 550]
        ),
        knex.raw('INSERT INTO foods (name, calories) VALUES (?, ?)',
          ['Macaroni and Cheese', 950]
        ),
        knex.raw('INSERT INTO foods (name, calories) VALUES (?, ?)',
          ['Granola Bar', 200]
        ),
        knex.raw('INSERT INTO foods (name, calories) VALUES (?, ?)',
          ['Gum', 50]
        ),
        knex.raw('INSERT INTO foods (name, calories) VALUES (?, ?)',
          ['Cheese', 400]
        ),
        knex.raw('INSERT INTO foods (name, calories) VALUES (?, ?)',
          ['Fruit Snacks', 120]
        ),
        knex.raw('INSERT INTO foods (name, calories) VALUES (?, ?)',
          ['Apple', 220]
        )
    ])
  })
}

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meals RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('meals').insert([
        {name: 'Breakfast'},
        {name: 'Lunch'},
        {name: 'Dinner'},
        {name: 'Snack'}
      ])
    })
}

setTimeout(function() {
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
      console.log(something)
  }
}, 500)
