import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { INGREDIENTS_API } from '../const/types';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.html',
  styleUrl: './ingredients.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ingredients {
  readonly ingredients = input.required<INGREDIENTS_API>();

  quantityDisplay(q:number|string):string {
    if (Number.isInteger(Number(q))) {
      return Number(q).toFixed(0);
    }
    const DECS = q.toString().split(".");
    const INT = Number(DECS[0]) > 0 ? DECS[0] : '';
    let dec = DECS[1];
    switch (DECS[1]) {
      case '25':
        dec = '¼';
        break;
      case '5':
      case '50':
        dec = '½';
        break;
      case '75':
        dec = '¾';
        break;
      default:
        // Code to execute if none of the cases match
    }
    return `${INT} ${dec}`;
  }
}
