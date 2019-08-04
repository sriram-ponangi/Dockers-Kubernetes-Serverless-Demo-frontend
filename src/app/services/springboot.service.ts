import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SpringbootService {

  static apiURL: string;

  constructor(private http: HttpClient, private configs: ConfigService) {
    SpringbootService.apiURL = configs.springbootURL();
  }

  getQuote(): Observable<any> {
    console.log('In getQuote() ');
    const httpOptions = {
      headers: { 'Content-Type': 'application/json' }
    };
    return this.http.get(SpringbootService.apiURL + '/quote' , httpOptions)
               .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status} \nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
