import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./browse-recipes/browse-recipes').then(m => m.BrowseRecipes)},
  { path: 'add', loadComponent: () => import('./add-recipe/add-recipe').then(m => m.AddRecipe)},
  { path: 'ingredients', loadComponent: () => import('./all-ingredients/all-ingredients').then(m => m.AllIngredients)},
  { path: ':recipe_id', loadComponent: () => import('./full-recipe/full-recipe').then(m => m.FullRecipe)},
];
