import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,      
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <mat-toolbar class="custom-toolbar">
      <span>L.M.S Web App</span>
      <span style="flex: 1 1 auto"></span>
      <button mat-raised-button color="primary" routerLink="/books">
        <mat-icon>menu_book</mat-icon>
        Books
      </button>
      <button mat-raised-button color="accent" routerLink="/categories">
        <mat-icon>category</mat-icon>
        Categories
      </button>
    </mat-toolbar>

    <div style="padding: 20px;">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('L.M.S-WebApp');
}
