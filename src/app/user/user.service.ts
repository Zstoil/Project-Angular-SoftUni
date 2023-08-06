import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { IUser } from '../interfaces/user';

const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser | undefined;
  USER_KEY = '[user]';

  constructor(private httpClient: HttpClient) { 
    
  }
  
  get isLogged(): boolean {
    return !!this.user;
  }

  loginHandler(): void {
    this.user = {
      email: 'john.doe@gmail.com',
      firstName: 'John',
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
