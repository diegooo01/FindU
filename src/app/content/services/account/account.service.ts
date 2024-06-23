import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  loginUser(email: string, password: string) {
    const url = `${this.baseUrl}/login`;
    return this.http.post<any>(url, {email, password});
  }

  registerUser(name: string, lastname: string, email: string, password: string, age: number, college: string, career: string, level: number, image: string) {
    const url = `${this.baseUrl}/register`;
    return this.http.post<any>(url, {name, lastname, email, password, age, college, career, level, image});
  }

}
