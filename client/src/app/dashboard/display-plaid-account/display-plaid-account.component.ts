import { Component, OnInit } from '@angular/core';
import {LoginuserService} from './../../shared/loginuser.service';
import {DisplayPlaidAccountService} from './display-plaid-account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-display-plaid-account',
  templateUrl: './display-plaid-account.component.html',
  styleUrls: ['./display-plaid-account.component.css']
})
export class DisplayPlaidAccountComponent implements OnInit {

accounts:any[];
errorMsg:string;
  constructor(private login:LoginuserService,private plaidService:DisplayPlaidAccountService,private router: Router) { }
email:any;
  ngOnInit() {
  	this.email=this.login.getLoginUser();
  	this.getPlaidAccount();
  }

getPlaidAccount(){
	this.plaidService.getDetails(this.email)
	.subscribe((res)=>{
		console.log("This is response",res[0].account);
		this.accounts=res[0].account;
		console.log("safas",this.accounts);
	},(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      })
}
}
