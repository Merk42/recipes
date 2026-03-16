import { Injectable, resource } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeData {
  async contentSections():Promise<any> {
    const res = await fetch(`content.json`);
    return await res.json()
  }
}
