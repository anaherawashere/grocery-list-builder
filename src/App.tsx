import { useState } from 'react'
import { Button } from './components/Button'
import { RecipeList } from './components/RecipeList/RecipeList'
import { useRecipeList } from './components/RecipeList/useRecipeList'

const App = () => {
  const { data: recipes, isError, isLoading, error } = useRecipeList()
  const [recipeList, setRecipeList] = useState([])

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  const handleClick = () => setRecipeList(recipes)

  return (
    <main>
      <h1>Grocery List Builder</h1>
      <Button onClick={handleClick}>Add Item</Button>
      <RecipeList recipes={recipeList} />
    </main>
  )
}

export default App
