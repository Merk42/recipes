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

  showIDs = signal<Set<string>>(new Set)

  filteredRecipies = computed(() => {
    const IDS = Array.from(this.showIDs()).filter(item => item !== undefined)
    const FILTERED = this.recipes.value() || [];
    if (!IDS.length) {
        return FILTERED;
    }
    return FILTERED.filter(recipe => IDS.includes(recipe.id))
  })
}
