import { Routes } from '@angular/router';
import {LoginComponent} from "./content/pages/login/login.component";
import {RegisterComponent} from "./content/pages/register/register.component";
import {HomeComponent} from "./content/pages/home/home.component";
import {UsersChatComponent} from "./content/components/home-components/users-chat/users-chat.component";
import { provideRouter } from '@angular/router';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/users-chat', component: UsersChatComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


export const appRoutingProviders = [
  provideRouter(routes)
];