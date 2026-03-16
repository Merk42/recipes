export type RECIPES_API = {
  id: string;
  title: string;
  description: string;
  prep_time_mins: number|string;
  cook_time_mins: number|string;
  servings: number|string;
  difficulty: string;
  image_url: string|null,
  created_at: string;
}[]

export type INGREDIENTS_API = {
  name: string;
  category: string;
  quantity: number|string;
  unit: string|null;
  notes: string|null;
}[]

export type STEPS_API = {
  step_number: number|string;
  instruction: string;
  timer_seconds: number|string|null
}[]

export type CATEGORIES_API = {
  name:string;
  slug:string;
}[]


export type RECIPE_DETAIL_API = RECIPES_API & {
  steps: STEPS_API[];
};
