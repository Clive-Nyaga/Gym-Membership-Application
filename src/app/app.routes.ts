import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { WorkoutComponent } from './components/workout.component';
import { DietComponent } from './components/diet.component';
import { ProgressComponent } from './components/progress.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'workout', component: WorkoutComponent },
  { path: 'diet', component: DietComponent },
  { path: 'progress', component: ProgressComponent },
  { path: '**', redirectTo: '' }
];
