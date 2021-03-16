import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Book} from '../book';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private booksUrl = 'http://localhost:8080/api/v1/products';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

}
