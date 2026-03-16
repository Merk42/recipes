import { Component, effect, input, resource, signal } from '@angular/core';
import { INGREDIENTS_API, RECIPES_API, STEPS_API } from '../const/types';
import { Ingredients } from '../ingredients/ingredients';
import { Steps } from '../steps/steps';
import { RECIPES, INGREDIENTS, STEPS } from '../const/dummy-data';
import { RouterLink } from "@angular/router";
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-full-recipe',
  imports: [Ingredients, Steps, RouterLink, JsonPipe],
  templateUrl: './full-recipe.html',
  styleUrl: './full-recipe.scss',
})
export class FullRecipe {
  readonly recipe_id = input('');
  recipe_summary = signal<RECIPES_API>([])
  recipe_ingredients = signal<INGREDIENTS_API>([]);
  recipe_steps = signal<STEPS_API>([]);

  constructor() {
    effect(() => {
      const RECIPE_ID = this.recipe_id();
      console.log('get recipe for ID of', RECIPE_ID)
      this.recipe_summary.set(RECIPES)
      this.recipe_ingredients.set(INGREDIENTS);
      this.recipe_steps.set(STEPS)
    })
  }

  userResource = resource({
  params: () => ({id: this.recipe_id()}),
  loader: ({params, abortSignal}): Promise<any> => {
    // fetch cancels any outstanding HTTP requests when the given `AbortSignal`
    // indicates that the request has been aborted.
    return fetch(`api/recipedetail.php?recipe_id=${params.id}`);
  },
});
}
