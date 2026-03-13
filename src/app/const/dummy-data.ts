import {
  CATEGORIES_API,
  INGREDIENTS_API,
  RECIPES_API,
  STEPS_API,
} from './types';

export const ALL_RECIPES: RECIPES_API = [
  {
    id: '1',
    title: 'Classic Buttermilk Pancakes',
    description: 'Light, fluffy pancakes perfect for a lazy weekend morning.',
    prep_time_mins: '10',
    cook_time_mins: '20',
    servings: '4',
    difficulty: 'easy',
    image_url: null,
    created_at: '2026-03-13 09:31:06',
  },
  {
    id: '2',
    title: 'Spaghetti alla Carbonara',
    description:
      'The Roman classic — no cream, just eggs, guanciale, and plenty of black pepper.',
    prep_time_mins: '10',
    cook_time_mins: '20',
    servings: '2',
    difficulty: 'medium',
    image_url: null,
    created_at: '2026-03-13 09:31:06',
  },
  {
    id: '3',
    title: 'Cherry Tomato & Basil Pasta',
    description:
      'A 20-minute weeknight hero. Burst tomatoes make their own bright sauce.',
    prep_time_mins: '5',
    cook_time_mins: '15',
    servings: '2',
    difficulty: 'easy',
    image_url: null,
    created_at: '2026-03-13 09:31:06',
  },
];

export const RECIPES: RECIPES_API = [
  {
    id: '1',
    title: 'Classic Buttermilk Pancakes',
    description: 'Light, fluffy pancakes perfect for a lazy weekend morning.',
    prep_time_mins: '10',
    cook_time_mins: '20',
    servings: '4',
    difficulty: 'easy',
    image_url: null,
    created_at: '2026-03-13 09:31:06',
  },
];

export const INGREDIENTS: INGREDIENTS_API = [
  {
    name: 'all-purpose flour',
    category: 'pantry',
    quantity: '1.50',
    unit: 'cup',
    notes: null,
  },
  {
    name: 'baking powder',
    category: 'pantry',
    quantity: '1.00',
    unit: 'tsp',
    notes: null,
  },
  {
    name: 'sugar',
    category: 'pantry',
    quantity: '2.00',
    unit: 'tbsp',
    notes: null,
  },
  {
    name: 'salt',
    category: 'pantry',
    quantity: '0.50',
    unit: 'tsp',
    notes: null,
  },
  {
    name: 'egg',
    category: 'protein',
    quantity: '2.00',
    unit: null,
    notes: 'lightly beaten',
  },
  {
    name: 'whole milk',
    category: 'dairy',
    quantity: '1.25',
    unit: 'cup',
    notes: null,
  },
  {
    name: 'butter',
    category: 'dairy',
    quantity: '3.00',
    unit: 'tbsp',
    notes: 'melted',
  },
];

export const STEPS: STEPS_API = [
  {
    step_number: '1',
    instruction:
      'Whisk together the flour, baking powder, sugar, and salt in a large bowl.',
    timer_seconds: null,
  },
  {
    step_number: '2',
    instruction:
      'In a separate bowl, beat the eggs, then stir in the milk and melted butter.',
    timer_seconds: null,
  },
  {
    step_number: '3',
    instruction:
      'Pour the wet ingredients into the dry and stir until just combined — a few lumps are fine.',
    timer_seconds: null,
  },
  {
    step_number: '4',
    instruction:
      'Heat a non-stick pan over medium heat. Pour in about 1\/4 cup of batter per pancake.',
    timer_seconds: null,
  },
  {
    step_number: '5',
    instruction:
      'Cook until bubbles form on the surface and the edges look set, about 2-3 minutes.',
    timer_seconds: '150',
  },
  {
    step_number: '6',
    instruction:
      'Flip and cook for another 1-2 minutes until golden. Serve immediately.',
    timer_seconds: '90',
  },
];

export const CATEGORIES: CATEGORIES_API = [
  { name: 'Breakfast', slug: 'breakfast' },
  { name: 'Vegetarian', slug: 'vegetarian' },
  { name: 'Quick', slug: 'quick' },
];
