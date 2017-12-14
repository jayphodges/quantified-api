exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM meal_foods; DELETE FROM meals; DELETE FROM foods')
    .then(() => {
      return Promise.all([
        knex.raw(`INSERT INTO foods(name, calories)
                  VALUES (?, ?, ?, ?)`, ["Banana", 150, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories)
                  VALUES (?, ?, ?, ?)`, ["Bagel Bites - Four Cheese", 650, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories)
                  VALUES (?, ?, ?, ?)`, ["Chicken Burrito", 800, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories)
                  VALUES (?, ?, ?, ?)`, ["Grapes", 180, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories)
                  VALUES (?, ?, ?, ?)`, ["Blueberry Muffins", 450, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories)
                  VALUES (?, ?, ?, ?)`, ["Yogurt", 550, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories)
                  VALUES (?, ?, ?, ?)`, ["Macoroni and Cheese", 950, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories)
                  VALUES (?, ?, ?, ?)`, ["Granola Bar", 200, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories)
                  VALUES (?, ?, ?, ?)`, ["Gum", 50, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories)
                  VALUES (?, ?, ?, ?)`, ["Cheese", 400, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories)
                  VALUES (?, ?, ?, ?)`, ["Fruit Snack", 120, new Date, new Date]),
        knex.raw(`INSERT INTO foods(name, calories)
                  VALUES (?, ?, ?, ?)`, ["Apple", 220, new Date, new Date]),
        knex.raw(`INSERT INTO meals(name)
                  VALUES (?, ?, ?)`, ["Breakfast", new Date, new Date]),
        knex.raw(`INSERT INTO meals(name)
                  VALUES (?, ?, ?)`, ["Lunch", new Date, new Date]),
        knex.raw(`INSERT INTO meals(name)
                  VALUES (?, ?, ?)`, ["Dinner", new Date, new Date]),
        knex.raw(`INSERT INTO meals(name)
                  VALUES (?, ?, ?)`, ["Snack", new Date, new Date]),
      ])
    })
}
