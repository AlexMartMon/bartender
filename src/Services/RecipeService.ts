import axios from "axios";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponse,
  RecipeAPIResponseSchema,
} from "../Schemas/recipes-schema";
import { Drink, SeachFilter } from "../Types/Index";

export async function getCategories() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  const { data } = await axios.get(url);
  const response = CategoriesAPIResponseSchema.safeParse(data);
  if (response.success) {
    return response.data;
  }
}

export async function getRecipes(filters: SeachFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;
  const { data } = await axios.get(url);
  const response = DrinksAPIResponse.safeParse(data);
  if (response.success) {
    return response.data;
  }
}

export async function getRecipeById(id: Drink["idDrink"]) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data } = await axios.get(url);
  const response = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
  if (response.success) {
    return response.data;
  }
}
