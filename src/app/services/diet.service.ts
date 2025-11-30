import { Injectable } from '@angular/core';
import { DayMealPlan } from '../models/diet.model';

@Injectable({
  providedIn: 'root'
})
export class DietService {
  private weeklyMeals: { [key: string]: DayMealPlan } = {
    Monday: {
      breakfast: { name: 'Ugali & Sukuma Wiki', calories: 320, protein: 8, carbs: 65, fats: 3, prepTime: 15, cost: 80 },
      lunch: { name: 'Rice & Beans with Chicken', calories: 480, protein: 28, carbs: 58, fats: 12, prepTime: 20, cost: 150 },
      dinner: { name: 'Chapati & Beef Stew', calories: 520, protein: 32, carbs: 45, fats: 18, prepTime: 30, cost: 200 },
      snacks: [{ name: 'Groundnuts & Banana', calories: 180, protein: 6, carbs: 25, fats: 8, prepTime: 2, cost: 50 }],
      totalCalories: 1500, totalCost: 480
    },
    Tuesday: {
      breakfast: { name: 'Mandazi & Tea', calories: 300, protein: 6, carbs: 55, fats: 8, prepTime: 10, cost: 60 },
      lunch: { name: 'Githeri with Vegetables', calories: 420, protein: 18, carbs: 68, fats: 8, prepTime: 25, cost: 120 },
      dinner: { name: 'Tilapia & Sweet Potato', calories: 450, protein: 35, carbs: 40, fats: 15, prepTime: 25, cost: 250 },
      snacks: [{ name: 'Boiled Eggs & Avocado', calories: 220, protein: 12, carbs: 8, fats: 18, prepTime: 5, cost: 80 }],
      totalCalories: 1390, totalCost: 510
    },
    Wednesday: {
      breakfast: { name: 'Porridge & Bread', calories: 350, protein: 10, carbs: 62, fats: 6, prepTime: 12, cost: 70 },
      lunch: { name: 'Pilau with Kachumbari', calories: 460, protein: 15, carbs: 72, fats: 14, prepTime: 35, cost: 180 },
      dinner: { name: 'Nyama Choma & Ugali', calories: 550, protein: 38, carbs: 35, fats: 25, prepTime: 20, cost: 300 },
      snacks: [{ name: 'Passion Fruit & Nuts', calories: 160, protein: 4, carbs: 20, fats: 9, prepTime: 3, cost: 60 }],
      totalCalories: 1520, totalCost: 610
    },
    Thursday: {
      breakfast: { name: 'Samosa & Chai', calories: 280, protein: 8, carbs: 38, fats: 12, prepTime: 8, cost: 90 },
      lunch: { name: 'Mukimo & Chicken Curry', calories: 500, protein: 30, carbs: 55, fats: 16, prepTime: 30, cost: 200 },
      dinner: { name: 'Fish & Chips', calories: 480, protein: 25, carbs: 48, fats: 20, prepTime: 25, cost: 220 },
      snacks: [{ name: 'Yogurt & Honey', calories: 150, protein: 8, carbs: 22, fats: 4, prepTime: 2, cost: 70 }],
      totalCalories: 1410, totalCost: 580
    },
    Friday: {
      breakfast: { name: 'Pancakes & Milk', calories: 340, protein: 12, carbs: 48, fats: 10, prepTime: 15, cost: 85 },
      lunch: { name: 'Matoke & Meat Stew', calories: 440, protein: 26, carbs: 52, fats: 14, prepTime: 28, cost: 170 },
      dinner: { name: 'Biryani with Raita', calories: 520, protein: 22, carbs: 68, fats: 18, prepTime: 40, cost: 280 },
      snacks: [{ name: 'Roasted Maize', calories: 180, protein: 5, carbs: 35, fats: 3, prepTime: 5, cost: 40 }],
      totalCalories: 1480, totalCost: 575
    },
    Saturday: {
      breakfast: { name: 'French Toast & Fruit', calories: 320, protein: 9, carbs: 52, fats: 8, prepTime: 12, cost: 100 },
      lunch: { name: 'Wali wa Nazi & Fish', calories: 470, protein: 28, carbs: 58, fats: 16, prepTime: 30, cost: 240 },
      dinner: { name: 'Grilled Chicken & Salad', calories: 420, protein: 35, carbs: 15, fats: 22, prepTime: 20, cost: 250 },
      snacks: [{ name: 'Mango & Cashews', calories: 200, protein: 4, carbs: 28, fats: 10, prepTime: 3, cost: 80 }],
      totalCalories: 1410, totalCost: 670
    },
    Sunday: {
      breakfast: { name: 'Chapati & Scrambled Eggs', calories: 380, protein: 16, carbs: 42, fats: 16, prepTime: 15, cost: 120 },
      lunch: { name: 'Beef Stew & Rice', calories: 490, protein: 32, carbs: 48, fats: 18, prepTime: 35, cost: 220 },
      dinner: { name: 'Grilled Tilapia & Vegetables', calories: 400, protein: 30, carbs: 25, fats: 18, prepTime: 25, cost: 280 },
      snacks: [{ name: 'Sweet Potato & Milk', calories: 190, protein: 6, carbs: 38, fats: 2, prepTime: 10, cost: 60 }],
      totalCalories: 1460, totalCost: 680
    }
  };

  getDayMealPlan(day: string): DayMealPlan {
    return this.weeklyMeals[day] || this.weeklyMeals['Monday'];
  }

  getWeeklyMealPlan() {
    return this.weeklyMeals;
  }
}