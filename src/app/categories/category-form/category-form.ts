import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-form',
  imports: [HttpClientModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './category-form.html',
  styleUrl: './category-form.css'
})
export class CategoryForm {
  name: string = "";

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  CreateCategory(form: NgForm) {
    if (form.invalid) {
      alert("Please enter a valid category name.");
      return;
    }

    const body = { name: this.name };

    this.http.post('https://localhost:44329/api/Categories', body).subscribe({
      next: () => {
        alert('Category created successfully!');
        this.router.navigate(['/categories']);
      },
      error: (err) => console.error(err)
    });
  }
}
