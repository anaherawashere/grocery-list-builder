import { useQuery } from '@tanstack/react-query'
import { getAllRecipes } from '../../api/apiRecipe'

export const useRecipeList = () => {
  const query = useQuery({
    queryKey: ['recipes'],
    queryFn: getAllRecipes,
  })
  return { ...query }
}
