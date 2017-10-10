import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AccountService} from './account.service';
import * as data from '../../config/multi_en_config.json';
import {LoginuserService} from './../../shared/loginuser.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],

  /*providing the service*/
  providers:[AccountService]
})
export class AccountComponent implements OnInit {
  public   word = (<any>data).account;
  constructor(private accountService:AccountService,
    private router:Router,
    private login:LoginuserService) { }
  /*declarating variables*/
  result:any;
  value:any;
  email:string;
  accountNo:string;
  data:any={};
  dob:string;
  errorMsg:string;
  ngOnInit() {
    this.email=this.login.getLoginUser();
    this.getData();
  }

  /*getting account details*/
getData(){
  this.accountService.getAccount(this.email)
  .subscribe((res)=>{
    console.log(res[0]);
    this.data=res[0];
    //this.dob=(res[0].dob).toString().splice(0,10);
  },(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      })
}

deleteAccount(){
  this.accountService.deleteAccount(this.email)
  .subscribe((res)=>{
    console.log(res);
    if(res.ok==1&&res.n==1)
      this.router.navigateByUrl('/welcome');
    //this.data=res[0];
    //this.dob=(res[0].dob).toString().splice(0,10);
  },(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      })
}
}