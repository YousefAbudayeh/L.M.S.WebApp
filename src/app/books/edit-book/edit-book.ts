import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-edit-book',
  imports: [CommonModule, FormsModule, HttpClientModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './edit-book.html',
  styleUrl: './edit-book.css'
})
export class EditBook {
  id: string | null = null;
  title = '';
  author = '';
  description = '';
    categories = [
    { uid: '1', name: 'Fiction' },
    { uid: '2', name: 'Non-Fiction' },
    { uid: '3', name: 'Science' },
  ];
  selectedCategoryIds: string[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

   ngOnInit() {
    console.log("reached!");
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.http.get(`http://localhost:5195/api/Books/${this.id}`).subscribe((data: any) => {
        // this.books = data.data;
         this.title = data.data.title;
         this.author = data.data.author;
         this.description = data.data.description;
         this.categories = data.data.categories;
        console.log("edit in process", data);
    });
    }
  }

 selectedCategoryId(){

 }

  EditBook() {
    console.log(this.id);
    const body = { uid: this.id, title: this.title, author: this.author, description: this.description, categoryUids: [] };

    this.http.put('http://localhost:5195/api/Books',body).subscribe({
      next: () => {
        alert('Book edited successfully!');
        this.router.navigate(['/books']);
      },
      error: (err) => console.error(err)
    });
  }
}
