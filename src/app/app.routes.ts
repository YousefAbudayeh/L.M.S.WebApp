import { Routes } from '@angular/router';
import { BookForm } from './books/book-form/book-form';
import { BookList } from './books/book-list/book-list';

export const routes: Routes = [
  { path: 'books', component: BookList },
  { path: 'books/create', component: BookForm },
  { path: '', redirectTo: '/books', pathMatch: 'full' }
];
