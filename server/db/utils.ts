import db from '../connections'

export const getAllRecipesQuery = async () => {
  return await db('recipes').select()
}
