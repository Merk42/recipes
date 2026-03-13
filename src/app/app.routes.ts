import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./browse-recipes/browse-recipes').then(m => m.BrowseRecipes)},
  { path: ':recipe_id', loadComponent: () => import('./full-recipe/full-recipe').then(m => m.FullRecipe)},
];
