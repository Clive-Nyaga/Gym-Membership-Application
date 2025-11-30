import { Injectable } from '@angular/core';
import { WorkoutPlan, WeeklyPlan } from '../models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private weeklyPlan: WeeklyPlan = {
    monday: {
      id: 'mon',
      day: 'Monday',
      name: 'Upper Body Push',
      duration: 45,
      difficulty: 'Intermediate',
      targetMuscles: ['Chest', 'Shoulders', 'Triceps'],
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
      exercises: [
        { name: 'Deadlifts', sets: 3, reps: '8-10', restTime: 120, muscleGroups: ['Back', 'Hamstrings'] },
        { name: 'Push-ups', sets: 2, reps: '10-15', restTime: 60, muscleGroups: ['Chest', 'Triceps'] },
        { name: 'Jump Squats', sets: 3, reps: '12', restTime: 75, muscleGroups: ['Legs', 'Cardio'] }
      ]
    },
    saturday: {
      id: 'sat',
      day: 'Saturday',
      name: 'Active Recovery',
      duration: 30,
      difficulty: 'Beginner',
      targetMuscles: ['Flexibility', 'Mobility'],
      exercises: [
        { name: 'Yoga Flow', sets: 1, reps: '15 min', restTime: 0, muscleGroups: ['Full Body'] },
        { name: 'Light Walking', sets: 1, reps: '15 min', restTime: 0, muscleGroups: ['Cardio'] }
      ]
    }
  };

  getWeeklyPlan(): WeeklyPlan {
    return this.weeklyPlan;
  }

  getDayWorkout(day: keyof WeeklyPlan): WorkoutPlan {
    return this.weeklyPlan[day];
  }
}