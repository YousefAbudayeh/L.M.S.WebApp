import { Routes } from '@angular/router';
import { BookList } from './books/book-list/book-list';
import { BookForm } from './books/book-form/book-form';
import { CategoryList } from './categories/category-list/category-list';
import { CategoryForm } from './categories/category-form/category-form';
import { Home } from './home/home';
import { EditBook } from './books/edit-book/edit-book';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'books', component: BookList },
  { path: 'books/create', component: BookForm },
  { path: 'books/edit/:id', component: EditBook },
  { path: 'categories', component: CategoryList },
  { path: 'categories/create', component: CategoryForm },
  { path: 'categories/edit', component: CategoryForm },
];