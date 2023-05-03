import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('Key');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('Key')
    window.location.href="http://localhost:4200/login"
  }

  getUser() {
    let user = sessionStorage.getItem('Key');
    return user;
  }
}
