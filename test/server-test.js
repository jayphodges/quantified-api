const assert = require('chai').assert
const app = require('../server')
const request = require('request')
const environment = process.env.NODE_ENV || 'test'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)
const Food = require('../lib/models/food')
const pry = require('pryjs')

describe('Server', function(){

  before(function(done){
    this.port = 9876
    this.server = app.listen(this.port, function(err, result){
      if(err) { return done(err) }
      done()
    })
    this.request = request.defaults({
      baseUrl: 'http://localhost:9876'
    })
  })

  after(function(){
    this.server.close()
  })

  it('should exist', function(){
    assert(app)
  })

  describe('/api/vi/foods', function(){
    xit('should return an array of all food objects', function(done){
      this.request.get('/api/v1/foods', function(error, response){
        if (error) {done(error)}

        let parsedFoods = JSON.parse(response.body)

        assert.equal(parsedFoods.length, 12)
        assert.equal(parsedFoods[0].name, "Banana")
        done()
      })
    })
  })

  describe('/api/v1/foods/:id', function(){

    xit('should return 404 if resource is not found', function(done){
      this.request.get('/api/v1/foods/100000', function(error, response){
        if (error) { done(error) }
        assert.equal(response.statusCode, 404)
        done()
      })
    })

    xit('should return a single food with the id given', function(done){
      this.request.get('/api/v1/foods/1', function(error, response){
        if(error) {done(error)}

        let parsedFood = JSON.parse(response.body)
        assert.equal(response.statusCode, 200)
        assert.equal(parsedFood.name, "Banana")
        done()
      })
    })
  })

  describe('post /api/v1/foods', function(){

    it('should return a 422 if missing a property', function(done){
      let name = "Orange"
      this.request.post('/api/v1/foods',{ name: name }, function(error, response){
        if(error) {done(error)}
        assert.equal(response.statusCode, 422)
        done()
      })
    })

    it('should return a 201 when succesfully posting', function(done){
      let name = "Orange"
      let calories = "100"
      this.request.post('/api/v1/foods',{ form: {name: name, calories: calories} }, function(error, response){
        if(error) {done(error)}
        assert.equal(response.statusCode, 200)
        done()
      })
    })
  })
})
