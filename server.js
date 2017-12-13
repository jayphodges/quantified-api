const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mealController = require('./lib/controllers/meal')
const foodController = require('./lib/controllers/food')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const foodController = require('./lib/controllers/food')
const mealController = require('./lib/controllers/meal')

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Quantified Self'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Foods
app.get('/api/v1/foods', foodController.getFoods)
app.get('/api/v1/foods/:id', foodController.getFood)
app.post('/api/v1/foods', foodController.addFood)
app.patch('/api/v1/foods/:id', foodController.patchFood)
app.delete('/api/v1/foods/:id', foodController.deleteFood)

// Meals
app.get('/api/v1/meals', mealController.getMeals)
app.get('/api/v1/meals/:meal_id/foods', mealController.getMealFoods)
app.post('/api/v1/meals/:meal_id/foods/:id', mealController.addMealFood)
app.delete('/api/v1/foods/:id', mealController.deleteMealFood)

if(!module.parent) {
  app.listen(app.get('port'), function() {
    console.log(app.locals.title + " is running on " + app.get('port') + ".")
  })
}

module.exports = app
