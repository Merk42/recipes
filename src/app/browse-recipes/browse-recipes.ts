import { Component, signal } from '@angular/core';
import { ALL_RECIPES } from '../const/dummy-data';
import { RouterLink } from '@angular/router';
import { RECIPES_API } from '../const/types';
@Component({
  selector: 'app-browse-recipes',
  imports: [RouterLink],
  templateUrl: './browse-recipes.html',
  styleUrl: './browse-recipes.scss',
})
export class BrowseRecipes {
  ALL_RECIPES = signal<RECIPES_API>(ALL_RECIPES)
}
