import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getChats(sender: string, receiver: string): Observable<any[]> {
    const url = `${this.baseUrl}/messages`;
    return this.http.post<any[]>(url, { sender, receiver }).pipe(
      catchError(this.handleError)
    );
  }

  sendMessage(sender: string, receiver: string, content: string, type: string): Observable<any> {
    const url = `${this.baseUrl}/sendMessage`;
    const payload = { sender, receiver, content, type};
    console.log('Sending message payload:', payload); // Log payload
    return this.http.post<any>(url, payload).pipe(
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
