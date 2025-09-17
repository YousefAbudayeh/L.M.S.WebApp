import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatListModule, MatButtonModule],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookList {
  books: any[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.loadBooks();
  }

  loadBooks() {
    this.http.get<any[]>('https://localhost:44329/api/Books').subscribe({
      next: (data) => this.books = data,
      error: (err) => console.error(err)
    });
  }

  editBook(id: string) {
    this.router.navigate(['/books/edit', id]);
  }

  deleteBook(id: string) {
    if (!confirm('Are you sure?')) return;

    this.http.delete(`https://localhost:44329/api/Books/${id}`).subscribe({
      next: () => this.loadBooks(),
      error: (err) => console.error(err)
    });
  }
}
