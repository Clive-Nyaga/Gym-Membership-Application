import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietService } from '../services/diet.service';
import { DayMealPlan } from '../models/diet.model';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="diet-container">
      <h1>Weekly Diet Plan</h1>
      <p class="subtitle">Budget-friendly meals optimized for your 9-5 schedule</p>
      
      <div class="day-selector">
        <button *ngFor="let day of days" 
                (click)="selectDay(day)" 
                [class.active]="selectedDay === day"
                class="day-btn">
          {{ day }}
        </button>
      </div>

      <div class="meal-plan" *ngIf="selectedDay">
        <h2>{{ selectedDay }} Meal Plan</h2>
        
        <div class="meals" *ngIf="currentMealPlan">
          <div class="meal-card">
            <h3>🌅 Breakfast (7:00 AM)</h3>
            <p><strong>{{ currentMealPlan.breakfast.name }}</strong></p>
            <div class="meal-details">
              <span>Calories: {{ currentMealPlan.breakfast.calories }}</span>
              <span>Protein: {{ currentMealPlan.breakfast.protein }}g</span>
              <span>Prep: {{ currentMealPlan.breakfast.prepTime }}min</span>
              <span>Cost: KES {{ currentMealPlan.breakfast.cost }}</span>
            </div>
          </div>

          <div class="meal-card">
            <h3>🥪 Lunch (12:30 PM)</h3>
            <p><strong>{{ currentMealPlan.lunch.name }}</strong></p>
            <div class="meal-details">
              <span>Calories: {{ currentMealPlan.lunch.calories }}</span>
              <span>Protein: {{ currentMealPlan.lunch.protein }}g</span>
              <span>Prep: {{ currentMealPlan.lunch.prepTime }}min</span>
              <span>Cost: KES {{ currentMealPlan.lunch.cost }}</span>
            </div>
          </div>

          <div class="meal-card">
            <h3>🍽️ Dinner (7:00 PM)</h3>
            <p><strong>{{ currentMealPlan.dinner.name }}</strong></p>
            <div class="meal-details">
              <span>Calories: {{ currentMealPlan.dinner.calories }}</span>
              <span>Protein: {{ currentMealPlan.dinner.protein }}g</span>
              <span>Prep: {{ currentMealPlan.dinner.prepTime }}min</span>
              <span>Cost: KES {{ currentMealPlan.dinner.cost }}</span>
            </div>
          </div>

          <div class="meal-card">
            <h3>🥜 Snacks</h3>
            <p><strong>{{ currentMealPlan.snacks[0]?.name }}</strong></p>
            <div class="meal-details">
              <span>Calories: {{ currentMealPlan.snacks[0]?.calories }}</span>
              <span>Protein: {{ currentMealPlan.snacks[0]?.protein }}g</span>
              <span>Prep: {{ currentMealPlan.snacks[0]?.prepTime }}min</span>
              <span>Cost: KES {{ currentMealPlan.snacks[0]?.cost }}</span>
            </div>
          </div>
        </div>

        <div class="daily-summary" *ngIf="currentMealPlan">
          <h3>Daily Totals</h3>
          <div class="summary-grid">
            <div>Total Calories: {{ currentMealPlan.totalCalories }}</div>
            <div>Total Protein: {{ currentMealPlan.breakfast.protein + currentMealPlan.lunch.protein + currentMealPlan.dinner.protein + (currentMealPlan.snacks[0]?.protein || 0) }}g</div>
            <div>Total Cost: KES {{ currentMealPlan.totalCost }}</div>
            <div>Prep Time: {{ currentMealPlan.breakfast.prepTime + currentMealPlan.lunch.prepTime + currentMealPlan.dinner.prepTime + (currentMealPlan.snacks[0]?.prepTime || 0) }}min</div>
          </div>
        </div>
      </div>

      <div class="tips">
        <h3>💡 Tips for 9-5 Workers in Kenya</h3>
        <ul>
          <li>Buy ingredients in bulk from local markets to save costs</li>
          <li>Prepare ugali and rice in batches for the week</li>
          <li>Keep roasted groundnuts and fruits at your desk</li>
          <li>Use a sufuria for quick one-pot meals</li>
          <li>Drink plenty of water - carry a reusable bottle</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .diet-container { padding: 20px; max-width: 1000px; margin: 0 auto; }
    .subtitle { color: #666; margin-bottom: 30px; }
    .day-selector { display: flex; gap: 10px; margin-bottom: 30px; flex-wrap: wrap; }
    .day-btn { padding: 8px 16px; border: 2px solid #e0e0e0; background: white; border-radius: 6px; cursor: pointer; }
    .day-btn.active { background: #2196f3; color: white; border-color: #2196f3; }
    .meals { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px; }
    .meal-card { background: white; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px; }
    .meal-details { display: flex; gap: 15px; margin-top: 10px; flex-wrap: wrap; }
    .meal-details span { background: #f5f5f5; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
    .daily-summary { background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
    .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-top: 15px; }
    .tips { background: #e8f5e8; padding: 20px; border-radius: 8px; }
    .tips ul { margin-top: 15px; }
    .tips li { margin-bottom: 8px; }
  `]
})
export class DietComponent implements OnInit {
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  selectedDay = 'Monday';
  currentMealPlan!: DayMealPlan;

  constructor(private dietService: DietService) {}

  ngOnInit() {
    this.updateMealPlan();
  }

  selectDay(day: string) {
    this.selectedDay = day;
    this.updateMealPlan();
  }

  private updateMealPlan() {
    this.currentMealPlan = this.dietService.getDayMealPlan(this.selectedDay);
  }
}