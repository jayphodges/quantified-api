const Food = require('../models/food')

const getFoods = (request, response, next) => {
  Food.index()
  .then(function(data){
    response.json(data.rows)
  })
}

const getFood = (request, response) => {

}

const addFood = (request, response) => {

}

const patchFood = (request, response) => {

}

const deleteFood = (request, response) => {

}
