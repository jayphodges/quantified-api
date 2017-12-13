const assert = require('chai').assert
const app = require('../server')
const request = require('request')
const environment = process.env.NODE_ENV || 'test'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)
const Food = require('../lib/models/food')

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
    beforeEach(function(done){
      Food.create( {name: "banana", calories: "100"} )
      .then(Food.create( {name: "orange", calories: "200"} ))
      .then(function() { done() })
    })

    afterEach(function(done){
      Food.destroyAll()
      .then(function() { done() })
    })

    it('should return an array of all food objects', function(done){
      this.request.get('/api/v1/foods', function(error, response){
        if (error) {done(error)}

        let parsedSecret = JSON.parse(response.body)

        assert.equal(parsedSecret.length, 2)
      })
    })
  })
})
