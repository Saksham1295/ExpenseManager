import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {LoginuserService} from './../shared/loginuser.service';
import {Router} from '@angular/router';
@Component({
 selector: 'app-middleware',
 templateUrl: './middleware.component.html',
 styleUrls: ['./middleware.component.css']
})
export class MiddlewareComponent implements OnInit {

 constructor(private cookieService:CookieService,private router: Router,private login:LoginuserService) { }
    ngOnInit() {
   console.log("this is dashboard");
    let LoginToken=this.cookieService.get('token');
    let TokenBearer=(JSON.parse(LoginToken.slice(2,LoginToken.length)).token);
    let email=(JSON.parse(LoginToken.slice(2,LoginToken.length)).email);
    this.login.setLoginUser(email);
     localStorage.setItem("key",TokenBearer);  
    this.router.navigate(['/dashboard']);
 
 }
}