import { Injectable } from '@angular/core';
import { computed, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { environment } from '../environments/environment';
import { RECIPES_API } from './const/types';
@Injectable({
  providedIn: 'root',
})
export class RecipeData {
  public recipes = httpResource<RECIPES_API>(() => `${environment.browse_api}`)

  showIDs = signal<string[]>([])

  filteredRecipies = computed(() => {
    const FILTERED = this.recipes.value();
    if (!FILTERED) {
      return []
    }
    if (!this.showIDs().length) {
      return FILTERED;
    }
    return FILTERED.filter(recipe => this.showIDs().includes(recipe.id))
  })
}
