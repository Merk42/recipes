import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { INGREDIENTS_API } from '../const/types';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.html',
  styleUrl: './ingredients.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ingredients {
  readonly ingredients = input.required<INGREDIENTS_API>()
}
