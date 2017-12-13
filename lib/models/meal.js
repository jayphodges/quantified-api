const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);

const index = () => {
  return database.raw(
      `SELECT meals.id, meals.name, foods.id AS food_id, foods.name AS food_name, foods.calories
       FROM meals
       JOIN foods_meals
       ON foods_meals.meal_id = meals.id
       JOIN foods
       ON foods_meals.food_id = foods.id
       GROUP BY meals.id, foods.id
       ORDER BY meals.id;`
     )
}

const create = (food_id, meal_id) => {
  return database.raw(
    'INSERT INTO foods_meals (food_id, meal_id) VALUES (?, ?)',
    [food_id, meal_id])
}

const show = (meal_id) => {
  return database.raw(
    "SELECT foods.* FROM foods INNER JOIN meal_foods ON foods.id = meal_foods.food_id WHERE meal_foods.meal_id = ?",
    [meal_id]
  )
}

const destroy = (food_id, meal_id) => {
  return database.raw('DELETE FROM foods_meals WHERE food_id = ? AND meal_id = ?',
  [food_id, meal_id])
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
