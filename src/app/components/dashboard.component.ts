import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkoutService } from '../services/workout.service';
import { WeeklyPlan } from '../models/workout.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard">
      <h1>Gym Membership Dashboard</h1>
      <div class="stats">
        <div class="stat-card">
          <h3>This Week's Progress</h3>
          <p>4/6 workouts completed</p>
        </div>
        <div class="stat-card">
          <h3>Next Workout</h3>
          <p>{{ getNextWorkout() }}</p>
        </div>
      </div>
      
      <div class="weekly-overview">
        <h2>Weekly Schedule</h2>
        <div class="workout-grid">
          <div *ngFor="let day of getDays()" class="day-card" [class.completed]="isCompleted(day)">
            <h4>{{ weeklyPlan[day].day }}</h4>
            <p>{{ weeklyPlan[day].name }}</p>
            <span>{{ weeklyPlan[day].duration }}min</span>
            <small>{{ weeklyPlan[day].time }}</small>
          </div>
        </div>
      </div>
      
      <div class="quick-actions">
        <button routerLink="/workout" class="action-btn primary">Start Today's Workout</button>
        <button routerLink="/diet" class="action-btn">View Diet Plan</button>
        <button routerLink="/progress" class="action-btn">Track Progress</button>
      </div>
    </div>
  `,
  styles: [`
    .dashboard { padding: 20px; max-width: 1200px; margin: 0 auto; }
    .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
    .stat-card { background: #f5f5f5; padding: 20px; border-radius: 8px; text-align: center; }
    .workout-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
    .day-card { background: white; border: 2px solid #e0e0e0; padding: 15px; border-radius: 8px; text-align: center; }
    .day-card.completed { border-color: #4caf50; background: #f1f8e9; }
    .quick-actions { margin-top: 30px; display: flex; gap: 15px; flex-wrap: wrap; }
    .action-btn { padding: 12px 24px; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; }
    .action-btn.primary { background: #2196f3; color: white; }
    .action-btn { background: #e0e0e0; color: #333; }
  `]
})
export class DashboardComponent implements OnInit {
  weeklyPlan!: WeeklyPlan;
  completedDays = ['monday', 'tuesday', 'wednesday', 'thursday'];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.weeklyPlan = this.workoutService.getWeeklyPlan();
  }

  getDays(): (keyof WeeklyPlan)[] {
    return ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  }

  isCompleted(day: string): boolean {
    return this.completedDays.includes(day);
  }

  getNextWorkout(): string {
    const today = new Date().getDay();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDay = days[today];
    
    if (currentDay === 'sunday') return 'Monday - Upper Body Push';
    if (currentDay in this.weeklyPlan) {
      return this.weeklyPlan[currentDay as keyof WeeklyPlan]?.name || 'Rest Day';
    }
    return 'Rest Day';
  }
}