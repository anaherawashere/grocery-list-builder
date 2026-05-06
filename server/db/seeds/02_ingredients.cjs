exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('ingredients').del()
  await knex('ingredients').insert([
    // Spaghetti Bolognese (recipe_id: 1)
    { name: 'Spaghetti', quantity: 400, unit: 'g', recipe_id: 1 },
    { name: 'Minced Beef', quantity: 500, unit: 'g', recipe_id: 1 },
    { name: 'Tomato Sauce', quantity: 1, unit: 'cup', recipe_id: 1 },
    // Chicken Salad (recipe_id: 2)
    { name: 'Chicken Breast', quantity: 2, unit: 'pieces', recipe_id: 2 },
    { name: 'Lettuce', quantity: 1, unit: 'head', recipe_id: 2 },
    { name: 'Tomato', quantity: 2, unit: 'pieces', recipe_id: 2 },
  ])
}
