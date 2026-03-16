import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { RecipeData } from './recipe-data';
export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: ':recipe_id',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
