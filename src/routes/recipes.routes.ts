import { response, Router } from "express";
import { getCustomRepository } from "typeorm";

import RecipeRepositoy from "../repositories/RecipeRepository";
import CreateRecipeService from "../services/RecipeServices/CreateRecipe";

const recipeRoutes = Router();

recipeRoutes.post("/", async (request, response) => {
  const {
    recipe_name,
    owner_id,
    hops,
    // hops_list,
    // yeasts_list,
    // malts_list,
  } = request.body;

  const createRecipe = new CreateRecipeService();

  const recipe = await createRecipe.execute({
    recipe_name,
    owner_id,
    hops,
    // hops_list,
    // yeasts_list,
    // malts_list,
  });

  return response.json(recipe);
});

recipeRoutes.get("/", async (request, response) => {
  const recipeRepositoy = getCustomRepository(RecipeRepositoy);
  const recipe = await recipeRepositoy.find();

  response.json(recipe);
});

export default recipeRoutes;
