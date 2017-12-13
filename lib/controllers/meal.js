const Meal = require('../models/meal')

const getMeals = (request, response) => {
  Meal.index()
    .then((data) => {
      response.json(data)
    })
}

const getMealFoods = (request, response) => {

}

const addMealFood = (request, response) => {
  let food_id = request.params.food_id
  let meal_id = request.params.meal_id

  if (!food_id || !meal_id) {
    return response.status(422).send(
      { error: "Missing ID!"})
  }

  Meal.create(food_id, meal_id)
    .then((data)) => {
      response.status(201).json(data)
    }

}

const deleteMealFood = (request, response) => {
  let food_id = request.params.food_id
  let meal_id = request.params.meal_id

  if (!food_id | !meal_id) {
    return response.status(422).send(
      { error: "Missing ID!"})

  Meal.delete(food_id, meal_id)
    .then((data) => {

    })
}
