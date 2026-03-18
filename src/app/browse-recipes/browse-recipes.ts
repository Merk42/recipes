import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeData } from '../recipe-data';

@Component({
  selector: 'app-browse-recipes',
  imports: [RouterLink],
  templateUrl: './browse-recipes.html',
  styleUrl: './browse-recipes.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrowseRecipes {
  recipeService = inject(RecipeData);
}
