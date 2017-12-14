const Meal = require('../models/meal')

const getMeals = (request, response) => {
  Meal.index()
    .then((data) => {
      response.status(200).json(data)
    })
}

const getMealFoods = (request, response) => {
  console.log(response.params)
  let meal_id = response.params.meal_id

  if (!meal_id) {
    return response.status(404).send(
      { error: "Meal does not exist!"}
    )
  }

  Meal.show(meal_id)
    .then((data) => {
      response.status(200).json(data)
    })
}

const addMealFood = (request, response) => {
  let food_id = request.params.food_id
  let meal_id = request.params.meal_id

  if (!food_id & !meal_id) {
    return response.status(404).send(
      { error: "Cannot find requested meal and/or food to add food to specified meal"})
  }

  Meal.create(food_id, meal_id).then((data)) => {
      response.status(201).json(data).send(

      )
    }
}

const deleteMealFood = (request, response) => {
  let food_id = request.params.food_id
  let meal_id = request.params.meal_id

  if (!food_id & !meal_id) {
    return response.status(404).send(
      { error: "Missing ID!" }
    )
  }

  Meal.delete(food_id, meal_id)
    .then((data) => {
      return response.status(200)})
}

module.exports = {
  getMeals,
  getMealFoods,
  addMealFood,
  deleteMealFood
}

module.exports = {getMeals, getMealFoods, addMealFood, deleteMealFood}
