import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';
import { RECIPES_API } from '../const/types';

@Component({
  selector: 'app-browse-recipes',
  imports: [RouterLink],
  templateUrl: './browse-recipes.html',
  styleUrl: './browse-recipes.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrowseRecipes {
  public recipes = httpResource<RECIPES_API>(() => `${environment.browse_api}`)
}
