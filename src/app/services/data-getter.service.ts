import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {

  constructor(private http: HttpClient) { }

configUrl = '/timestamp';

  getTime() {
    return this.http.get(this.configUrl);
  }
}
