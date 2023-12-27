import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
// import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http: HttpClient
  ) { }

  getTodo = ():Observable<any> => {
    const todoURL = 'https://dummyjson.com/todos';
    return this.http.get(todoURL);
  }
}
