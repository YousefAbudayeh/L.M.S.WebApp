import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  template: `
    <div style="text-align: center; padding: 40px;">
      <h1>Welcome to L.M.S Web App</h1>
      <img src="welcome.svg" alt="Welcome Image" style="max-width: 300px; margin: 10px 0;">
      <div style="margin-top: 20px;">
        <button mat-raised-button color="primary" routerLink="/books" style="margin-right: 10px;">
          <mat-icon>menu_book</mat-icon>
          Books
        </button>
        <button mat-raised-button color="accent" routerLink="/categories">
          <mat-icon>category</mat-icon>
          Categories
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class Home {}