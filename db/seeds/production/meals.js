exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meals RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('meals').insert([
        {name: 'Breakfast'},
        {name: 'Lunch'},
        {name: 'Dinner'},
        {name: 'Snack'}
      ])
    })
}
