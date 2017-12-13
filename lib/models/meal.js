const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);

const index = () => {
  return database.raw('SELECT * FROM meals;')
}

const create = (food_id, meal_id) => {
  return database.raw(
    'INSERT INTO foods_meals (food_id, meal_id) VALUES (?, ?)',
    [food_id, meal_id])
  )
}

const show = (id) => {
  return database.raw("SELECT * FROM foods_meals WHERE id=?",
  [id])
}

const destroyAll = () => {
  return database.raw('TRUNCATE foods_meals RESTART IDENTITY')
}
