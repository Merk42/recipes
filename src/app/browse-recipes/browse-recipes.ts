import { httpResource } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RECIPES_API } from '../const/types';

@Component({
  selector: 'app-browse-recipes',
  imports: [RouterLink],
  templateUrl: './browse-recipes.html',
  styleUrl: './browse-recipes.scss',
})
export class BrowseRecipes {
  // public recipe = httpResource<RECIPES_API>(() => `api/browserecipes.php}`)
  public recipes = httpResource<RECIPES_API>(() => `example_recipes.json`)
}
