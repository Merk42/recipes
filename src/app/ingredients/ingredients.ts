import { Component, input } from '@angular/core';
import { INGREDIENTS_API } from '../const/types';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.html',
  styleUrl: './ingredients.scss',
})
export class Ingredients {
  readonly ingredients = input.required<INGREDIENTS_API>()
}
