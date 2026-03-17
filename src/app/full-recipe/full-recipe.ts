import { httpResource } from '@angular/common/http';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { environment } from '../../environments/environment';
import { RECIPE_DETAIL_API } from '../const/types';
import { Ingredients } from '../ingredients/ingredients';
import { Steps } from '../steps/steps';

@Component({
  selector: 'app-full-recipe',
  imports: [Ingredients, Steps, RouterLink],
  templateUrl: './full-recipe.html',
  styleUrl: './full-recipe.scss',
})
export class FullRecipe {

  recipe_ingredients = computed(() => {
    return this.recipe?.value()?.ingredients ?? []
  })

  recipe_steps = computed(() => {
    return this.recipe?.value()?.steps ?? []
  })

  readonly recipe_id = input('');
  public recipe = httpResource<RECIPE_DETAIL_API>(() => `${environment.detail_api}?recipe_id=${this.recipe_id()}`)
}
