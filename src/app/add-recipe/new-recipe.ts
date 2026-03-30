import { applyEach, required, schema, SchemaPathTree, validate } from "@angular/forms/signals";

type Unit = ''|'tsp'|'tbsp'|'cup'|'oz'|'lb'|'g';

export interface Ingredient {
  quantity: number;
  unit: Unit;
  item: string;
  notes:string;
}

export interface newRecipe {
  title: string;
  description: string;
  prep_time_mins: number;
  cook_time_mins: number;
  servings: number;
  difficulty: string;
  ingredients: Ingredient[];
  steps: string[];
}

export const initialData: newRecipe = {
  title: '',
  description: '',
  prep_time_mins: 0,
  cook_time_mins: 0,
  servings: 1,
  difficulty: 'easy',
  ingredients: [],
  steps: []
}

// Apply a single validator
export const newRecipeSchema1 = schema<newRecipe>(rootPath => {
  required(rootPath.title, { message: 'First name is required' });
  applyEach(rootPath.steps, url)
});

// Apply a set of validators
export const newRecipeSchema = schema<newRecipe>(rootPath => {
  required(rootPath.title, { message: 'First name is required' });
  applyEach(rootPath.steps, (path) => {
    required(path);
  })
});

// Apply a set of validators using a separate function
export const newRecipeSchema3 = schema<newRecipe>(rootPath => {
  required(rootPath.steps, { message: 'If added, the social link is required' });
  applyEach(rootPath.steps, linksSchema)
});

// Reusable custom url validator
function url(field: SchemaPathTree<string>, options?: { message?: string }) {
  validate(field, (ctx) => {
    try {
      // Use the URL constructor to determine if the value is a valid url
      new URL(ctx.value());
      return null;
    } catch {
      return {
        kind: 'url',
        message: options?.message || 'Please enter a valid URL',
      };
    }
  });
}

// Define the set of validation rules for the array items
const linksSchema = schema<string>((link) => {
  required(link, { message: 'If added, the social link is required' });
  url(link);
});
