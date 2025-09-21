import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,
    MatSelectModule, MatOptionModule, MatCheckboxModule,
    MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './book-form.html', styleUrls: ['./book-form.css']
})
export class BookForm implements OnInit {
  title = ''; author = ''; description = ''; categories: { uid: String; name: String; }[] = []; selectedCategoryIds: string[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<any[]>('https://localhost:44329/api/Categories').subscribe({
      next: (data: any) => {
        console.log("reached", data)
        this.categories = data.data
      }, error: (err) => console.error(err)
    });
  }

  createBook() {
    if (!this.title || this.title.trim().length === 0) {
      alert('Title is required');
      return;
    }
    if (!this.author || this.author.trim().length === 0) {
      alert('Author is required');
      return;
    }
    if (!this.description || this.description.trim().length === 0) {
      alert('Description is required');
      return;
    }
    if (!this.selectedCategoryIds || this.selectedCategoryIds.length === 0) {
      alert('At least one category must be selected');
      return;
    }

    const body = {
      title: this.title.trim(),
      author: this.author.trim(),
      description: this.description.trim(),
      categoryUids: this.selectedCategoryIds
    };

    this.http.post('https://localhost:44329/api/Books', body).subscribe({
      next: () => {
        alert('Book created successfully!');
        this.router.navigate(['/books']);
      },
      error: (err) => console.error(err)
    });
  }

}