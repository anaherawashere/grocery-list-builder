import request from 'superagent'

export const getAllRecipes = async () => {
  const res = await request.get('/api/v1/recipes')
  return res.body
}
