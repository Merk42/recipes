import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { ALL_INGREDIENTS_API } from '../const/types';
import { RecipeData } from '../recipe-data';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ALL_INGREDIENTS } from '../const/dummy-data';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-recipe-filter',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './recipe-filter.html',
  styleUrl: './recipe-filter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeFilter {
  recipeService = inject(RecipeData);

  ingredientIDs = signal<Set<string>>(new Set)

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

  all = computed(() => {
    return ALL_INGREDIENTS
  })

  public all_ingredients = httpResource<ALL_INGREDIENTS_API>(() => `${environment.all_ingredients_api}`)

  filter1() {
    const S = this.recipeService.showIDs();
    S.add('1')
    this.recipeService.showIDs.set(S)
  }


  protected form = new FormGroup(
    Object.fromEntries(
      this.all().map(
        option => [option.id.toString(), new FormControl(false, { nonNullable: true })]
      )
    )
  );

  query = computed(() => {
    return Array.from(this.ingredientIDs()).join(',')
  })


  public recipeids = httpResource<{recipe_id:string}[]>(() => `${environment.filter_api}?ingredient_id=${this.query()}`)
onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
    console.warn(Object.keys(this.form.value).filter(key => this.form.value[key]))
    const INGREDEINT_IDS = Object.keys(this.form.value).filter(key => this.form.value[key]) || []
    this.ingredientIDs.set(new Set(INGREDEINT_IDS));
  }

  constructor() {
    effect(() => {
      const rids = this.recipeids.value() || [];
      const nids:string[] = rids.map(r => r.recipe_id)
      this.recipeService.showIDs.set(new Set(nids))
    })
  }

}

