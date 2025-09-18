import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './book-form.html',
  styleUrls: ['./book-form.css']
})
export class BookForm {
  title = '';
  author = '';
  description = '';

  constructor(private http: HttpClient, private router: Router) {}

  createBook() {
    const body = { title: this.title, author: this.author, description: this.description, categoryUids: [] };

    this.http.post('http://localhost:5195/api/Books', body).subscribe({
      next: () => {
        alert('Book created successfully!');
        this.router.navigate(['/books']);
      },
      error: (err) => console.error(err)
    });
  }
}
