import type { Recipe } from '../../models/models'

const RecipeList = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <div>
      {recipes.map((recipe, i) => (
        <p key={i + 1}>{recipe.name}</p>
      ))}
    </div>
  )
}

export { RecipeList }
