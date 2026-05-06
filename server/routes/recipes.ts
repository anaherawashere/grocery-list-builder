import { Router } from 'express'
import * as db from '../db/utils'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const allRecipes = await db.getAllRecipesQuery()
    res.json(allRecipes)
  } catch (error) {
    console.log('Error:', error)
    res
      .status(500)
      .json({ message: 'Something went wrong with get all recipes' })
  }
})

export default router
