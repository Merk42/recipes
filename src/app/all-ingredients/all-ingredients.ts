import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { environment } from '../../environments/environment';
import { ALL_INGREDIENTS_API } from '../const/types';

@Component({
  selector: 'app-all-ingredients',
  imports: [],
  templateUrl: './all-ingredients.html',
  styleUrl: './all-ingredients.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllIngredients {

  grouped_ingredients = computed(() => {
    const I = this.all_ingredients.value() || [];
    if (I.length) {
      I.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    }
    return Object.groupBy(I, ({ category }) => category);
  })

  categories = computed<string[]>(() => {
    return Object.keys(this.grouped_ingredients());
  })

  public all_ingredients = httpResource<ALL_INGREDIENTS_API>(() => `${environment.all_ingredeints_api}`)

}
