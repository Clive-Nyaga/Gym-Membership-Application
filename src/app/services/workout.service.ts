import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkoutPlan, WeeklyPlan } from '../models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  private weeklyPlan: WeeklyPlan = {
    monday: {
      id: 'mon',
      day: 'Monday',
      name: 'Upper Body Push',
      duration: 45,
      difficulty: 'Intermediate',
      targetMuscles: ['Chest', 'Shoulders', 'Triceps'],
      time: '6:00 AM or 7:00 PM',
      exercises: [
        { name: 'Push-ups', sets: 3, reps: '12-15', restTime: 60, muscleGroups: ['Chest', 'Triceps'] },
        { name: 'Overhead Press', sets: 3, reps: '8-10', restTime: 90, muscleGroups: ['Shoulders'] },
        { name: 'Dips', sets: 3, reps: '10-12', restTime: 60, muscleGroups: ['Triceps', 'Chest'] }
      ]
    },
    tuesday: {
      id: 'tue',
      day: 'Tuesday',
      name: 'Lower Body',
      duration: 50,
      difficulty: 'Intermediate',
      targetMuscles: ['Quadriceps', 'Hamstrings', 'Glutes'],
      time: '6:00 AM or 7:00 PM',
      exercises: [
        { name: 'Squats', sets: 4, reps: '12-15', restTime: 90, muscleGroups: ['Quadriceps', 'Glutes'] },
        { name: 'Lunges', sets: 3, reps: '10 each leg', restTime: 60, muscleGroups: ['Quadriceps', 'Glutes'] },
        { name: 'Calf Raises', sets: 3, reps: '15-20', restTime: 45, muscleGroups: ['Calves'] }
      ]
    },
    wednesday: {
      id: 'wed',
      day: 'Wednesday',
      name: 'Upper Body Pull',
      duration: 45,
      difficulty: 'Intermediate',
      targetMuscles: ['Back', 'Biceps'],
      time: '6:00 AM or 7:00 PM',
      exercises: [
        { name: 'Pull-ups', sets: 3, reps: '6-10', restTime: 90, muscleGroups: ['Back', 'Biceps'] },
        { name: 'Rows', sets: 3, reps: '10-12', restTime: 75, muscleGroups: ['Back'] },
        { name: 'Bicep Curls', sets: 3, reps: '12-15', restTime: 60, muscleGroups: ['Biceps'] }
      ]
    },
    thursday: {
      id: 'thu',
      day: 'Thursday',
      name: 'Core & Cardio',
      duration: 35,
      difficulty: 'Beginner',
      targetMuscles: ['Core', 'Cardiovascular'],
      time: '6:00 AM or 7:00 PM',
      exercises: [
        { name: 'Plank', sets: 3, reps: '30-60 sec', restTime: 60, muscleGroups: ['Core'] },
        { name: 'Mountain Climbers', sets: 3, reps: '20', restTime: 45, muscleGroups: ['Core', 'Cardio'] },
        { name: 'Burpees', sets: 3, reps: '8-12', restTime: 90, muscleGroups: ['Full Body'] }
      ]
    },
    friday: {
      id: 'fri',
      day: 'Friday',
      name: 'Full Body Circuit',
      duration: 40,
      difficulty: 'Intermediate',
      targetMuscles: ['Full Body'],
      time: '6:00 AM or 7:00 PM',
      exercises: [
        { name: 'Deadlifts', sets: 3, reps: '8-10', restTime: 120, muscleGroups: ['Back', 'Hamstrings'] },
        { name: 'Push-ups', sets: 2, reps: '10-15', restTime: 60, muscleGroups: ['Chest', 'Triceps'] },
        { name: 'Jump Squats', sets: 3, reps: '12', restTime: 75, muscleGroups: ['Legs', 'Cardio'] }
      ]
    },
    saturday: {
      id: 'sat',
      day: 'Saturday',
      name: 'HIIT Training',
      duration: 30,
      difficulty: 'Intermediate',
      targetMuscles: ['Full Body', 'Cardio'],
      time: '8:00 AM or 6:00 PM',
      exercises: [
        { name: 'Jumping Jacks', sets: 4, reps: '30 sec', restTime: 30, muscleGroups: ['Full Body'] },
        { name: 'High Knees', sets: 4, reps: '30 sec', restTime: 30, muscleGroups: ['Cardio'] },
        { name: 'Push-up Burpees', sets: 3, reps: '10', restTime: 60, muscleGroups: ['Full Body'] }
      ]
    },
    sunday: {
      id: 'sun',
      day: 'Sunday',
      name: 'Recovery Day',
      duration: 45,
      difficulty: 'Beginner',
      targetMuscles: ['Recovery', 'Flexibility'],
      time: 'Anytime',
      exercises: [
        { name: 'Gentle Stretching', sets: 1, reps: '20 min', restTime: 0, muscleGroups: ['Full Body'] },
        { name: 'Meditation', sets: 1, reps: '10 min', restTime: 0, muscleGroups: ['Mental Health'] },
        { name: 'Light Walking', sets: 1, reps: '15 min', restTime: 0, muscleGroups: ['Recovery'] }
      ]
    }
  };

  getWeeklyPlan(): WeeklyPlan {
    return this.weeklyPlan;
  }

  getDayWorkout(day: keyof WeeklyPlan): WorkoutPlan {
    return this.weeklyPlan[day];
  }

  getWorkouts(): Observable<WorkoutPlan[]> {
    return this.http.get<WorkoutPlan[]>(`${this.apiUrl}/workouts`);
  }

  getWorkoutById(id: string): Observable<WorkoutPlan> {
    return this.http.get<WorkoutPlan>(`${this.apiUrl}/workouts/${id}`);
  }

  completeWorkout(workoutId: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/progress`, {
      completedWorkouts: 5,
      lastCompletedWorkout: workoutId,
      completedDate: new Date().toISOString()
    });
  }
}