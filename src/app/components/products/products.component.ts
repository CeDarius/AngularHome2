import { Component, OnInit } from '@angular/core';
import {Book} from '../../book';
import {BooksService} from '../../servises/books.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, Book{

  id: number;
  author: string;
  title: string;
  price: number;
  books: Book[];
  errorReturned: boolean;
  errorMsg: string;

  inputText = `Placeholder text`;


  constructor(private bookService: BooksService, private router: Router) {
    this.errorMsg = this.router.getCurrentNavigation().extras.state?.error;
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      res => {
        this.books = res;
      },
      err => {
        this.errorReturned = true;
        this.errorMsg = err.message;
      }
    );
  }




}
