const Food = require('../models/food')

const getFoods = (request, response, next) => {
  Food.index()
  .then(function(data){
    response.json(data.rows)
  })
}

const getFood = (request, response) => {
  const id = request.params.id

  Food.show(id)
  .then(function(data){
    if (data.rowCount == 0) {return response.sendStatus(404) }

    response.json(data.rows[0])
  })
}

const addFood = (request, response) => {
  const name = request.body.name
  const calories = request.body.calories

  console.log(request.body)

  if (!name || !calories) {
    return response.status(422).send({ error: `${name} + ${calories} were not right ${request.body.keys}` })
  }

  Food.create(name, calories)
  .then(function(data){
    response.status(200).json(data.rows[0])
  })
}

const patchFood = (request, response) => {
  const id = request.params.id
  const name = request.body.name
  const calories = request.body.calories
}

const deleteFood = (request, response) => {
  const id = request.params.id

  Food.destroy(id)
  .then(function(data){
    response.status(200).json("Successfully deleted")
  })
}

module.exports = {getFoods, getFood, addFood, deleteFood, patchFood}
