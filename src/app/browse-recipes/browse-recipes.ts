import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RecipeData } from '../recipe-data';
import { RecipeFilter } from "../recipe-filter/recipe-filter";
import { RecipeCard } from "../recipe-card/recipe-card";
import { RecipeCardSkeleton } from "../recipe-card-skeleton/recipe-card-skeleton";

@Component({
  selector: 'app-browse-recipes',
  imports: [RecipeFilter, RecipeCard, RecipeCardSkeleton],
  templateUrl: './browse-recipes.html',
  styleUrl: './browse-recipes.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrowseRecipes {
  isFilterOpen = signal(false)
  recipeService = inject(RecipeData);

  toggleFilter() {
    this.isFilterOpen.set(!this.isFilterOpen())
  }
}
