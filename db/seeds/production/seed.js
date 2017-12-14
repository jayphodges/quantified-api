exports.seed = function(knex, Promise) {
  return knex.raw(`
    TRUNCATE foods RESTART IDENTITY CASCADE;
    DELETE FROM meals;
    `).then(() => {
      return Promise.all([
        knex.raw(`INSERT INTO foods(name, calories) VALUES (?, ?)`, ["Banana", 150])
        knex.raw(`INSERT INTO foods(name, calories) VALUES (?, ?)`, ["Bagel Bites - Four Cheese", 650])
        knex.raw(`INSERT INTO foods(name, calories) VALUES (?, ?)`, ["Chicken Burrito", 800])
        knex.raw(`INSERT INTO foods(name, calories) VALUES (?, ?)`, ["Grapes", 180])
        knex.raw(`INSERT INTO foods(name, calories) VALUES (?, ?)`, ["Blueberry Muffins", 450])
        knex.raw(`INSERT INTO foods(name, calories) VALUES (?, ?)`, ["Yogurt", 550])
        knex.raw(`INSERT INTO foods(name, calories) VALUES (?, ?)`, ["Macoroni and Cheese", 950])
        knex.raw(`INSERT INTO foods(name, calories) VALUES (?, ?)`, ["Granola Bar", 200])
        knex.raw(`INSERT INTO foods(name, calories) VALUES (?, ?)`, ["Gum", 50])
        knex.raw(`INSERT INTO foods(name, calories) VALUES (?, ?)`, ["Cheese", 400])
        knex.raw(`INSERT INTO foods(name, calories) VALUES (?, ?)`, ["Fruit Snack", 120])
        knex.raw(`INSERT INTO foods(name, calories) VALUES (?, ?)`, ["Apple", 220])
        knex.raw(`INSERT INTO meals(name) VALUES (?)`, ["Breakfast"])
        knex.raw(`INSERT INTO meals(name) VALUES (?)`, ["Lunch"])
        knex.raw(`INSERT INTO meals(name) VALUES (?)`, ["Dinner"])
        knex.raw(`INSERT INTO meals(name) VALUES (?)`, ["Snack"])
      ])
    })
}
