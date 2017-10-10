import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserSignedOut } from './user-signout';
import { Router } from '@angular/router';

@Injectable()

export class AuthGuard implements CanActivate{

  constructor(private user: UserSignedOut, private Router:Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if (this.user.getSignedOut()===true) { 
      console.log(1);
//      alert("You are now signing out");
      return true;
    } else {
      console.log(2);
      return false;

    }
  }
}