import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    const url = `${this.baseUrl}/getUsers`;
    return this.http.get<any[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getUser?id='${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
