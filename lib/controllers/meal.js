const Meal = require('../models/meal')

const getMeals = (request, response) => {
  Meal.index()
    .then((data) => {
      response.status(200).json(data.rows)
    })
}

const getMealFoods = (request, response) => {
  let meal_id = request.params.meal_id

  if (!meal_id) {
    return response.status(404).send(
      { error: "Meal does not exist!"}
    )
  }

  Meal.show(meal_id)
    .then((data) => {
      response.status(200).json(data.rows)
    })
}

const addMealFood = (request, response) => {
  let food_id = request.params.food_id
  let meal_id = request.params.meal_id

  if (!food_id & !meal_id) {
    return response.status(404).send(
      { error: "Cannot find requested meal and/or food to add food to specified meal"})
  }

  Meal.create(food_id, meal_id)
  .then((data) => {
    response.status(201).json(
      { message: "Successfully added food to meal" })
  })
}

const deleteMealFood = (request, response) => {
  let food_id = request.params.food_id
  let meal_id = request.params.meal_id

  if (!food_id & !meal_id) {
    return response.status(404).send(
      { error: "Missing ID!" }
    )
  }

  Meal.destroy(food_id, meal_id)
    .then((data) => {
      return response.status(404)})
}

module.exports = {
  getMeals,
  getMealFoods,
  addMealFood,
  deleteMealFood
}

module.exports = {getMeals, getMealFoods, addMealFood, deleteMealFood}
