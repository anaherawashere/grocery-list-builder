export type Ingredient = {
  name: string
  quantity: number
  unit: string
}

export type Recipe = {
  id: string
  name: string
  serves: number
  ingredients: Ingredient[]
}

export type ShoppingListItem = {
  name: string
  totalQuantity: number
  unit: string
}
