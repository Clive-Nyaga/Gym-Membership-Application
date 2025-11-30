import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutService } from '../services/workout.service';
import { WorkoutPlan, WeeklyPlan } from '../models/workout.model';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="workout-container">
      <h1>Today's Workout</h1>
      
      <div class="workout-header" *ngIf="currentWorkout">
        <h2>{{ currentWorkout.name }}</h2>
        <div class="workout-info">
          <span>Duration: {{ currentWorkout.duration }}min</span>
          <span>Time: {{ currentWorkout.time }}</span>
          <span>Difficulty: {{ currentWorkout.difficulty }}</span>
          <span>Target: {{ currentWorkout.targetMuscles.join(', ') }}</span>
        </div>
      </div>

      <div class="exercises" *ngIf="currentWorkout">
        <div *ngFor="let exercise of currentWorkout.exercises; let i = index" 
             class="exercise-card" [class.active]="currentExercise === i">
          <h3>{{ exercise.name }}</h3>
          <div class="exercise-details">
            <p><strong>Sets:</strong> {{ exercise.sets }}</p>
            <p><strong>Reps:</strong> {{ exercise.reps }}</p>
            <p><strong>Rest:</strong> {{ exercise.restTime }}s</p>
            <p><strong>Muscles:</strong> {{ exercise.muscleGroups.join(', ') }}</p>
          </div>
          <button *ngIf="currentExercise === i" (click)="completeExercise()" class="complete-btn">
            Complete Exercise
          </button>
        </div>
      </div>

      <div class="workout-controls">
        <button (click)="startWorkout()" *ngIf="!workoutStarted" class="start-btn">Start Workout</button>
        <button (click)="finishWorkout()" *ngIf="workoutStarted && currentWorkout && currentExercise >= currentWorkout.exercises.length" class="finish-btn">
          Finish Workout
        </button>
      </div>

      <div class="timer" *ngIf="restTimer > 0">
        <h3>Rest Time: {{ restTimer }}s</h3>
      </div>
    </div>
  `,
  styles: [`
    .workout-container { padding: 20px; max-width: 800px; margin: 0 auto; }
    .workout-header { background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
    .workout-info { display: flex; gap: 20px; margin-top: 10px; flex-wrap: wrap; }
    .workout-info span { background: white; padding: 5px 10px; border-radius: 4px; font-size: 14px; }
    .exercises { display: flex; flex-direction: column; gap: 15px; }
    .exercise-card { border: 2px solid #e0e0e0; padding: 20px; border-radius: 8px; }
    .exercise-card.active { border-color: #2196f3; background: #f3f9ff; }
    .exercise-details { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px; margin: 10px 0; }
    .complete-btn, .start-btn, .finish-btn { padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; }
    .start-btn { background: #4caf50; color: white; }
    .complete-btn { background: #2196f3; color: white; }
    .finish-btn { background: #ff9800; color: white; }
    .timer { text-align: center; background: #ffeb3b; padding: 15px; border-radius: 8px; margin-top: 20px; }
  `]
})
export class WorkoutComponent implements OnInit {
  currentWorkout: WorkoutPlan | null = null;
  workoutStarted = false;
  currentExercise = 0;
  restTimer = 0;

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    const today = new Date().getDay();
    const days: (keyof WeeklyPlan)[] = 
      ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
    const dayKey = days[today];
    this.currentWorkout = this.workoutService.getDayWorkout(dayKey);
  }

  startWorkout() {
    this.workoutStarted = true;
    this.currentExercise = 0;
  }

  completeExercise() {
    if (!this.currentWorkout) return;
    
    const exercise = this.currentWorkout.exercises[this.currentExercise];
    this.restTimer = exercise.restTime;
    
    const timer = setInterval(() => {
      this.restTimer--;
      if (this.restTimer <= 0) {
        clearInterval(timer);
        this.currentExercise++;
      }
    }, 1000);
  }

  finishWorkout() {
    alert('Workout completed! Great job!');
    this.workoutStarted = false;
    this.currentExercise = 0;
  }
}