const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);


const index = () => {
  return database.raw("SELECT * FROM foods")
}

const show = (id) => {
  return database.raw("SELECT * FROM foods WHERE id=?", [id])
}

const destroy = (id) => {
  return database.raw("DELETE FROM foods WHERE id=?", [id])
}

const destroyAll = () => {
  return database.raw("TRUNCATE foods RESTART IDENTITY")
}

const create = (name, calories) => {
  return database.raw(`INSERT INTO foods (name, calories) VALUES (?, ?) RETURNING name, calories`,
  [name, calories])
}

const updateFoodName = (id, name) => {
  return database.raw(`UPDATE "foods" SET "name"=? WHERE "foods"."id"=?`,
  [name, id])
}

const updateFoodCalories = (id, calories) => {
  return database.raw(`UPDATE "foods" SET "calories"=? WHERE "foods"."id"=?`,
  [calories, id])
}

module.exports = {create, destroyAll, destroy, show, index, updateFoodName, updateFoodCalories}
