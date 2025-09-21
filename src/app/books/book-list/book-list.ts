import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookList implements OnInit{
  books: any[] = [];
  displayedColumns: string[] = ['title', 'author', 'actions'];

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(){
    this.loadBooks();
  }

  loadBooks() {
    this.http.get<any[]>('https://localhost:44329/api/Books').subscribe((data: any) => {
        this.books = data.data;
        console.log("ggg",data);
    });
  }

    createbook() {
    console.log("create book");
    this.router.navigate(['/books/create']);
  }

  editBook(id: string) {
    console.log("edit book", id);
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
