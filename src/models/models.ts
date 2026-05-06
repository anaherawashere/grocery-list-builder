export interface Ingredient {
  name: string
  quantity: number
  unit: string
}

export interface Recipe {
  id: string
  name: string
  serves: number
  ingredients: Ingredient[]
}

export interface ShoppingListItem {
  name: string
  totalQuantity: number
  unit: string
}
