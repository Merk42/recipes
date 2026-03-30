import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Recipe {
  id: string;
  title: string;
  description: string;
  prep_time_mins: number|string;
  cook_time_mins: number|string;
  servings: number|string;
  difficulty: string;
  image_url: string|null,
  created_at: string;
}

@Component({
  selector: '[app-recipe-card]',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
})
export class RecipeCard {
  readonly recipe = input.required<Recipe>()
}
