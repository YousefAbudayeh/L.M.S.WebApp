import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './category-list.html',
  styleUrls: ['./category-list.css']
})
export class CategoryList implements OnInit{
  categories: any[] = [];
  displayedColumns: string[] = ['name', 'actions'];

  constructor(private http: HttpClient, private router: Router) {
  }

    ngOnInit(){
    this.loadCategories();
  }

  loadCategories() {
    this.http.get<any[]>('https://localhost:44329/api/Categories').subscribe({
      next: (data: any) => {
        console.log("reached", data)
        this.categories = data.data},
      error: (err) => console.error(err)
    });
  }

  CreateCategory(){
     this.router.navigate(['/categories/create']);
  }

  editCategory(id: string) {
    this.router.navigate(['/categories/edit', id]);
  }

  deleteCategory(id: string) {
    if (!confirm('Are you sure?')) return;
    this.http.delete(`https://localhost:44329/api/Categories/${id}`).subscribe({
      next: () => this.loadCategories(),
      error: (err) => console.error(err)
    });
  }
}
