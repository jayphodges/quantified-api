const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);

const index = () => {
  return database.raw(`
      SELECT meals.*, json_agg(foods.*)
      FROM meals
          JOIN foods_meals
              ON foods_meals.meal_id = meals.id
          JOIN foods
              ON foods_meals.food_id = foods.id
      GROUP BY meals.id;
     `)
}

const create = (food_id, meal_id) => {
  return database.raw(
    'INSERT INTO foods_meals (food_id, meal_id) VALUES (?, ?)',
    [food_id, meal_id])
}

const show = (meal_id) => {
  return database.raw(`
    SELECT foods.id, foods.name, foods.calories
    FROM foods
        INNER JOIN foods_meals
            ON foods.id = foods_meals.food_id
    WHERE foods_meals.meal_id = ?;
    `, [meal_id])
}

const destroy = (food_id, meal_id) => {
  // let food_meal = database('foods_meals').select('id').where('meal_id', meal_id).andWhere('food_id', food_id)
  // return database('foods_meals').where('id', food_meal).del()
  return database.raw(`
    DELETE FROM foods_meals
    WHERE food_id = ? AND meal_id = ?
    `,[food_id, meal_id])
  // return database.raw(`DELETE FROM foods_meals WHERE food_id = ${food_id} AND meal_id = ${meal_id} LIMIT 1`)
}

const destroyAll = () => {
  return database.raw('TRUNCATE foods_meals RESTART IDENTITY')
}

module.exports = {
  index,
  create,
  show,
  destroy,
  destroyAll
}
