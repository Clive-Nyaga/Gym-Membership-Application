import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  template: `
    <nav class="navbar">
      <div class="nav-brand">
        <h2>💪 GymFit Pro</h2>
      </div>
      <div class="nav-links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Dashboard</a>
        <a routerLink="/workout" routerLinkActive="active">Workout</a>
        <a routerLink="/diet" routerLinkActive="active">Diet</a>
        <a routerLink="/progress" routerLinkActive="active">Progress</a>
      </div>
    </nav>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .navbar {
      background: #2196f3;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .nav-brand h2 {
      margin: 0;
      font-size: 1.5rem;
    }
    .nav-links {
      display: flex;
      gap: 2rem;
    }
    .nav-links a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    .nav-links a:hover,
    .nav-links a.active {
      background: rgba(255,255,255,0.2);
    }
    .main-content {
      min-height: calc(100vh - 80px);
      background: #f5f5f5;
    }
    @media (max-width: 768px) {
      .navbar {
        flex-direction: column;
        gap: 1rem;
      }
      .nav-links {
        gap: 1rem;
      }
    }
  `]
})
export class App {}
