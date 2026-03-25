import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { FormField, email, form, required, submit } from '@angular/forms/signals';
import { Input } from '../form/input/input';
import { initialData, newRecipe, newRecipeSchema } from './new-recipe';

interface DemoData {
  title: string;
  description: string;
  prep_time_mins: number;
  cook_time_mins: number;
  servings: number;
  difficulty: string;
  steps: string[]
}

@Component({
  selector: 'app-add-recipe',
  imports: [FormField, Input],
  templateUrl: './add-recipe.html',
  styleUrl: './add-recipe.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddRecipe {
  demoModel = signal<DemoData>({
    title: '',
    description: '',
    prep_time_mins: 0,
    cook_time_mins: 0,
    servings: 1,
    difficulty: 'easy',
    steps: ['']
  });

  demoForm = form(this.demoModel, (schemaPath) => {
  });

  newRecipeModel = signal<newRecipe>(initialData);

  // Declare a form from the model and logic rules schema
  newRecipeForm = form(this.newRecipeModel, newRecipeSchema);

  // Add an empty social media profile link
  addStep() {
    this.newRecipeModel.update(profile => ({
      ...profile,
      steps: [...profile.steps, '']
    }));
  }

  // Delete a social media profile link
  removeStep(index: number) {
    this.newRecipeModel.update(profile => ({
      ...profile,
      steps: profile.steps.filter((_, i) => i !== index)
    }));
  }

  onSubmit() {
    if (this.newRecipeForm().valid()) {
      console.log('Form submitted:', this.newRecipeModel());
      // Handle form submission here
      // Reset form or navigate to another page
    }
  }

  onCancel() {
    // Reset form (or navigate to another page)
    this.newRecipeForm().reset(initialData);
  }

}




/*
INSERT INTO ingredients (name, category) VALUES
('fettuccine', 'pantry'),
('parmesan', 'dairy');

INSERT INTO recipes (title, description, prep_time_mins, cook_time_mins, servings, difficulty)
VALUES ('One pot garlic parmesan pasta', 'The easiest and creamiest pasta made in a single pot - even the pasta gets cooked right in the patn! How easy is that?', 10, 20, 4, 'easy');

INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, notes) VALUES
  (9, 2, 2, 'tbsp', NULL),
  (9, 9, 4, NULL, 'minced'),
  (9, 62, 2, 'cups', NULL),
  (9, 4, 1 'cup' 'or more, as needed'),
  (9, 71, 8, 'oz', NULL'),
  (9, 72, .5, 'cup', 'freshly grated'),
  (9, 24, 2, 'tbps', 'chopped');
  (8, 1, 2, NULL, NULL),
  (8, 67, .75, 'cup', NULL),
  (8, 68, 1 'cup', NULL),
  (8, 54, .5, 'cup', 'finely chopped'),
  (8, 13, 2, 'tsp', NULL),
  (8, 69, 2, 'lb', NULL),
  (8, 9, 4, NULL, 'minced');
  (8, 2, 1, 'tbsp', NULL),
  (8, 50, .75, 'cup', NULL),
  (8, 70, .5, 'cup', NULL),
  (8, 51, 3, 'tbsp', NULL);

INSERT INTO steps (recipe_id, step_number, instruction, timer_seconds) VALUES
  (9, 1, 'Melt butter in a large skillet over medium high heat. Add garlic and cook, stirring frequently, until fragrant, about 1-2 minutes.', 2),
  (9, 2, 'Stir in chicken broth, milk and fettuccine; season with salt and pepper, to taste.', NULL),
  (9, 3, 'Bring to a boil; reduce heat and simmer, stirring occasionally, until pasta is cooked through, about 18-20 minutes. Stir in Parmesan. If the mixture is too thick, add more milk as needed until desired consistency is reached.', 20),
  (9, 4, 'Serve immediately, garnished with parsley, if desired.', NULL);




*/
