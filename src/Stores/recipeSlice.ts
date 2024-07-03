import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../Services/RecipeService"
import { Categories, Drink, Drinks, Recipe, SeachFilter } from '../Types/Index';



export type RecipeSliceType = {
    categories: Categories,
    drinks: Drinks,
    selectedRecipe: Recipe,
    modal: boolean,
    fetchCategories: () => Promise<void>,
    searchRecipe: (seachFilter: SeachFilter) => Promise<void>,
    selectRecipe: (id: Drink['idDrink']) => Promise<void>,
    closeModal: () => void
}

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
    categories: {drinks: []},
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipe: async (filters) => {
        const drinks = await getRecipes(filters)
        set({
            drinks
        })
    },
    selectRecipe: async (id: Drink['idDrink']) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe,
            modal: true,
        })
    },
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe,
        })
    }
})