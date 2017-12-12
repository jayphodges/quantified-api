exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE foods RESTART IDENTITY CASCADE')
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
      ]);
    }).then(function() {
      return knex.raw('TRUNCATE meals RESTART IDENTITY CASCADE')
        .then(function () {
          return knex('meals').insert([
            {name: 'Breakfast'},
            {name: 'Lunch'},
            {name: 'Dinner'},
            {name: 'Snack'}
          ]);
        })
    }).then(function() {
      return knex.raw('TRUNCATE foods_meals RESTART IDENTITY CASCADE')
        .then(function () {
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
        })
      })
}
//
// exports.seed = function(knex, Promise) {
//   let foods = [ ["Banana", 150], ["Bagel Bites - Four Cheese", 650]]
//   return knex('foods').del()
//   .then(function() {
//     return Promise.all([
//       foods.forEach(function (value) {
//
//         addFood(value)
//             // let name = value[0]
//             // let calories = value[1]
//             // console.log(`${name}: ${calories}`)
//             // knex.raw(
//             // 'INSERT INTO foods (name, calories) VALUES (?, ?)',
//             //     [name, calories])
//         })
//     ]);
//   });
// };

// let foods = [ ["Banana", 150],
//   ["Bagel Bites - Four Cheese", 650],
//   ["Chicken Burrito", 800],
//   ["Grapes", 180],
//   ["Blueberry Muffins", 450],
//   ["Yogurt", 550],
//   ["Macaroni and Cheese", 950],
//   ["Granola Bar", 200],
//   ["Gum", 50],
//   ["Cheese", 400],
//   ["Fruit Snacks", 120],
//   ["Apple", 220]]
// const meals = [ "Breakfast", "Snack", "Lunch", "Dinner" ]
//
//
// const addFood = (foods) => {
//   console.log(this)
//     foods.forEach(function (value) {
//         let name = value[0]
//         let calories = value[1]
//         knex.raw(
//         'INSERT INTO foods (name, calories) VALUES (?, ?)',
//             [name, calories])
//     })
// }
//
// addFood(foods);
// FOODS.each do |food|
//   new_food = Food.create!(name: food.first, calories: food.last)
//   puts "Created #{new_food.name}"
// end
//
// MEALS.each do |meal_name|
//   meal = Meal.create!(name: meal_name)
//   puts "Created #{meal.name}"
// end
// const addFood = (foods)
// Meal.all.each do |meal|
//   3.times do
//     random_id = rand(Food.first.id..Food.last.id)
//     meal.foods << Food.find(random_id)
//   end
// end
