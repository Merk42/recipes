import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { ALL_INGREDIENTS_API } from '../const/types';
import { RecipeData } from '../recipe-data';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-recipe-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-filter.html',
  styleUrl: './recipe-filter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeFilter {
  recipeService = inject(RecipeData);

  ingredientIDs = signal<Set<string>>(new Set)

  all = computed(() => {
    return this.all_ingredients.value()?.sort((a, b) => a.name.localeCompare(b.name)) || []
  })

  public all_ingredients = httpResource<ALL_INGREDIENTS_API>(() => `${environment.all_ingredients_api}`)

  protected form = new FormGroup(
    Object.fromEntries(
      this.all().map(
        option => [option.id.toString(), new FormControl(false, { nonNullable: true })]
      )
    )
  );

  query = computed(() => {
    if (this.ingredientIDs().size === 0) {
      return 0
    }
    return Array.from(this.ingredientIDs()).join(',')
  })

  public recipeids = httpResource<{recipe_id:string}[]>(() => `${environment.filter_api}?ingredient_id=${this.query()}`)

  onSubmit() {
    const INGREDEINT_IDS = Object.keys(this.form.value).filter(key => this.form.value[key]) || []
    this.ingredientIDs.set(new Set(INGREDEINT_IDS));
  }

  constructor() {
    effect(() => {
      const rids = this.recipeids.value() || [];
      const nids:string[] = rids.map(r => r.recipe_id);
      const idset = new Set(nids);
      this.recipeService.showIDs.set(idset);
    })
    effect(() => {
      const ings = this.all();
      this.form = new FormGroup(
        Object.fromEntries(
          this.all().map(
            option => [option.id.toString(), new FormControl(false, { nonNullable: true })]
          )
        )
      );
    })
  }
}

