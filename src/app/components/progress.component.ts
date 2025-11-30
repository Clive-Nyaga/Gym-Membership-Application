import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="progress-container">
      <h1>Progress Tracker</h1>
      
      <div class="progress-overview">
        <div class="progress-card">
          <h3>Weekly Goal</h3>
          <div class="progress-bar">
            <div class="progress-fill" [style.width.%]="weeklyProgress"></div>
          </div>
          <p>{{ completedWorkouts }}/6 workouts completed</p>
        </div>
        
        <div class="progress-card">
          <h3>Consistency Streak</h3>
          <div class="streak">🔥 {{ streak }} days</div>
        </div>
        
        <div class="progress-card">
          <h3>Total Workouts</h3>
          <div class="total">{{ totalWorkouts }} completed</div>
        </div>
      </div>

      <div class="weekly-calendar">
        <h2>This Week's Activity</h2>
        <div class="calendar-grid">
          <div *ngFor="let day of weekDays" class="calendar-day" [class.completed]="day.completed">
            <div class="day-name">{{ day.name }}</div>
            <div class="day-workout">{{ day.workout }}</div>
            <div class="day-status">{{ day.completed ? '✅' : '⏳' }}</div>
          </div>
        </div>
      </div>

      <div class="achievements">
        <h2>Achievements</h2>
        <div class="achievement-grid">
          <div class="achievement" [class.unlocked]="totalWorkouts >= 1">
            <div class="badge">🏃</div>
            <div class="title">First Workout</div>
            <div class="description">Complete your first workout</div>
          </div>
          
          <div class="achievement" [class.unlocked]="streak >= 3">
            <div class="badge">🔥</div>
            <div class="title">3-Day Streak</div>
            <div class="description">Workout 3 days in a row</div>
          </div>
          
          <div class="achievement" [class.unlocked]="totalWorkouts >= 10">
            <div class="badge">💪</div>
            <div class="title">Dedicated</div>
            <div class="description">Complete 10 workouts</div>
          </div>
          
          <div class="achievement" [class.unlocked]="completedWorkouts >= 6">
            <div class="badge">🏆</div>
            <div class="title">Week Champion</div>
            <div class="description">Complete all weekly workouts</div>
          </div>
        </div>
      </div>

      <div class="recovery-tips">
        <h2>Recovery & Rest</h2>
        <div class="tips-grid">
          <div class="tip-card">
            <h4>💤 Sleep</h4>
            <p>Aim for 7-9 hours of quality sleep for optimal recovery</p>
          </div>
          <div class="tip-card">
            <h4>💧 Hydration</h4>
            <p>Drink water throughout the day, especially post-workout</p>
          </div>
          <div class="tip-card">
            <h4>🧘 Stress Management</h4>
            <p>Practice meditation or deep breathing after work</p>
          </div>
          <div class="tip-card">
            <h4>🛁 Active Recovery</h4>
            <p>Light stretching or walking on rest days</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .progress-container { padding: 20px; max-width: 1200px; margin: 0 auto; }
    .progress-overview { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
    .progress-card { background: white; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px; text-align: center; }
    .progress-bar { width: 100%; height: 20px; background: #f0f0f0; border-radius: 10px; margin: 10px 0; }
    .progress-fill { height: 100%; background: #4caf50; border-radius: 10px; transition: width 0.3s ease; }
    .streak { font-size: 2em; color: #ff5722; }
    .total { font-size: 2em; color: #2196f3; }
    .calendar-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-top: 20px; }
    .calendar-day { background: white; border: 2px solid #e0e0e0; padding: 15px; border-radius: 8px; text-align: center; }
    .calendar-day.completed { border-color: #4caf50; background: #f1f8e9; }
    .day-name { font-weight: bold; margin-bottom: 5px; }
    .day-workout { font-size: 12px; color: #666; margin-bottom: 10px; }
    .day-status { font-size: 1.5em; }
    .achievement-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px; }
    .achievement { background: #f5f5f5; padding: 20px; border-radius: 8px; text-align: center; opacity: 0.5; }
    .achievement.unlocked { background: #fff3e0; opacity: 1; border: 2px solid #ff9800; }
    .badge { font-size: 2em; margin-bottom: 10px; }
    .title { font-weight: bold; margin-bottom: 5px; }
    .description { font-size: 12px; color: #666; }
    .tips-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px; }
    .tip-card { background: #f9f9f9; padding: 20px; border-radius: 8px; }
  `]
})
export class ProgressComponent {
  completedWorkouts = 4;
  totalWorkouts = 12;
  streak = 4;
  
  weeklyProgress = (this.completedWorkouts / 6) * 100;
  
  weekDays = [
    { name: 'Mon', workout: 'Upper Push', completed: true },
    { name: 'Tue', workout: 'Lower Body', completed: true },
    { name: 'Wed', workout: 'Upper Pull', completed: true },
    { name: 'Thu', workout: 'Core & Cardio', completed: true },
    { name: 'Fri', workout: 'Full Body', completed: false },
    { name: 'Sat', workout: 'Recovery', completed: false }
  ];
}