import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user-service';
import { Router } from '@angular/router';

@Injectable()

export class AuthguardGuard implements CanActivate{

  constructor(private user: UserService, private Router:Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    //this.Router.navigate(['/login']);
    //return this.user.getUserLoggedIn();
    if (this.user.getUserLoggedIn()===true) { 
      console.log(1);
      return true;
    } else {
      console.log(2);
      window.alert("You don't have permission to view this page"); 
      this.Router.navigate(['/login']);
      return false;

    }
  }
}