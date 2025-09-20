import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edit-category',
  imports: [HttpClientModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './edit-category.html',
  styleUrl: './edit-category.css'
})
export class EditCategory {
  id: String | null = "";
  name: String = "";

   constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

   ngOnInit() {
    console.log("reached!");
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.http.get(`https://localhost:44329/api/Categories/${this.id}`).subscribe((data: any) => {
         this.name = data.data.name;
        console.log("edit in process", data);
    });
    }
  }

   EditCategory(){
    console.log(this.id);
    const body = { uid: this.id, name: this.name};

    this.http.put('https://localhost:44329/api/Categories', body).subscribe({
      next: () => {
        alert('Book edited successfully!');
        this.router.navigate(['/categories']);
      },
      error: (err) => console.error(err)
    });
   }
}