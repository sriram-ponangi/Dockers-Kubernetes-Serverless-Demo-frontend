import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class NodejsService {

  static apiURL: string;

  constructor(private http: HttpClient, private configs: ConfigService) {
    NodejsService.apiURL = configs.nodejsURL();
    console.log('NodejsService Constructor (NodejsService.apiURL): ', NodejsService.apiURL);
  }

  getKeys(value: string): Observable<any> {
    console.log('In getKeys() ');
    const httpOptions = {
      headers: { 'Content-Type': 'application/json' },
      params: { pattern : value}
    };
    return this.http.get(NodejsService.apiURL + '/all' , httpOptions)
               .pipe(retry(1), catchError(this.handleError));
  }

  searchValue(inputKey: string): Observable<any> {
    console.log('In getValue() ');
    const httpOptions = {
      headers: { 'Content-Type': 'application/json' },
      params: { key : inputKey}
    };
    return this.http.get(NodejsService.apiURL + '/get' , httpOptions)
               .pipe(retry(1), catchError(this.handleError));
  }

  updateValue(inputKey: string, inputValue: string): Observable<any> {
    console.log('In updateValue() ');
    const httpOptions = {
      headers: { 'Content-Type': 'application/json' },
      params: { key : inputKey, value : inputValue}
    };
    return this.http.get(NodejsService.apiURL + '/set' , httpOptions)
               .pipe(retry(1), catchError(this.handleError));
  }

  deleteKey(inputKey: string): Observable<any> {
    console.log('In getValue() ');
    const httpOptions = {
      headers: { 'Content-Type': 'application/json' },
      params: { key : inputKey}
    };
    return this.http.get(NodejsService.apiURL + '/delete' , httpOptions)
               .pipe(retry(1), catchError(this.handleError));
  }


  // Error handling
  handleError(error: any) {
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
