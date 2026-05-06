# Grocery List Builder

A simple web app to help you build a shopping list from your favorite recipes.

## MVP Features

- **Add Recipes:**
  - User can add recipe ingredients and serving amounts.
- **Select Recipes:**
  - User can select recipes to include in their shopping list.
- **Collate Ingredients:**
  - App will collate all ingredients for selected recipes and return them in a single list.
- **Sorted Shopping List:**
  - Shopping list will sort ingredients by alphabetical order for easy shopping.

## Tech Stack

- React (Vite + TypeScript)
- Express (Node.js)
- SQLite3 (with Knex.js)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run database migrations and seeds:**
   ```bash
   npx knex --knexfile server/knexfile.cjs migrate:latest
   npx knex --knexfile server/knexfile.cjs seed:run
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```

## Project Structure

- `src/` — Frontend React app
- `server/` — Backend API and database

## License

MIT
