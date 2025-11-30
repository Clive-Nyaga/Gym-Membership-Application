export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  restTime: number;
  muscleGroups: string[];
}

export interface WorkoutPlan {
  id: string;
  day: string;
  name: string;
  duration: number;
  exercises: Exercise[];
  targetMuscles: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  time: string;
}

export interface WeeklyPlan {
  monday: WorkoutPlan;
  tuesday: WorkoutPlan;
  wednesday: WorkoutPlan;
  thursday: WorkoutPlan;
  friday: WorkoutPlan;
  saturday: WorkoutPlan;
  sunday: WorkoutPlan;
}