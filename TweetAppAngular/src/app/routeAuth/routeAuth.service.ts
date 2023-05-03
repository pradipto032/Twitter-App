import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteAuth implements CanActivate {

  constructor(private router: Router, private authServ: AuthenticationService) { }

  public canActivate() {
    if (this.authServ.isUserLoggedIn()) {
      return true
    }
    else {
      this.router.navigate(['login'])
      return false
    }
  }
}
