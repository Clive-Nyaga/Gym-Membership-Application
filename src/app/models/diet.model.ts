export interface Meal {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  prepTime: number;
  cost: number;
}

export interface DayMealPlan {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
  snacks: Meal[];
  totalCalories: number;
  totalCost: number;
}

export interface WeeklyMealPlan {
  [key: string]: DayMealPlan;
}