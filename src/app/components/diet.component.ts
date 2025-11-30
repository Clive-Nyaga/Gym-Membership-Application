import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
                (click)="selectedDay = day" 
                [class.active]="selectedDay === day"
                class="day-btn">
          {{ day }}
        </button>
      </div>

      <div class="meal-plan" *ngIf="selectedDay">
        <h2>{{ selectedDay }} Meal Plan</h2>
        
        <div class="meals">
          <div class="meal-card">
            <h3>🌅 Breakfast (7:00 AM)</h3>
            <p><strong>Overnight Oats with Banana</strong></p>
            <div class="meal-details">
              <span>Calories: 350</span>
              <span>Protein: 12g</span>
              <span>Prep: 5min</span>
              <span>Cost: $2.50</span>
            </div>
          </div>

          <div class="meal-card">
            <h3>🥪 Lunch (12:30 PM)</h3>
            <p><strong>Chicken & Rice Bowl</strong></p>
            <div class="meal-details">
              <span>Calories: 450</span>
              <span>Protein: 35g</span>
              <span>Prep: 15min</span>
              <span>Cost: $4.00</span>
            </div>
          </div>

          <div class="meal-card">
            <h3>🍽️ Dinner (7:00 PM)</h3>
            <p><strong>Salmon with Sweet Potato</strong></p>
            <div class="meal-details">
              <span>Calories: 500</span>
              <span>Protein: 30g</span>
              <span>Prep: 25min</span>
              <span>Cost: $6.50</span>
            </div>
          </div>

          <div class="meal-card">
            <h3>🥜 Snacks</h3>
            <p><strong>Greek Yogurt & Almonds</strong></p>
            <div class="meal-details">
              <span>Calories: 200</span>
              <span>Protein: 15g</span>
              <span>Prep: 1min</span>
              <span>Cost: $2.00</span>
            </div>
          </div>
        </div>

        <div class="daily-summary">
          <h3>Daily Totals</h3>
          <div class="summary-grid">
            <div>Total Calories: 1,500</div>
            <div>Total Protein: 92g</div>
            <div>Total Cost: $15.00</div>
            <div>Prep Time: 46min</div>
          </div>
        </div>
      </div>

      <div class="tips">
        <h3>💡 Tips for 9-5 Workers</h3>
        <ul>
          <li>Meal prep on Sunday for the entire week</li>
          <li>Keep healthy snacks at your desk</li>
          <li>Use a slow cooker for easy dinner preparation</li>
          <li>Stay hydrated - aim for 8 glasses of water daily</li>
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
export class DietComponent {
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  selectedDay = 'Monday';
}