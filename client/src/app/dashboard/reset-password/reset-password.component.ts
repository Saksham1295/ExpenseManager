/* 

Name:Nikhil Gupta
Date last modified :29/09/17

*/



//------------------------------------------imported files--------------------------------------------//

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {LoginuserService} from '../../shared/loginuser.service';
import { Component, OnInit } from '@angular/core';
import {ResetpassService} from './resetpass.service';
import * as config from '../../config/multi_en_config.json';

//---------------------------------------------------------------------------------------------------//



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  providers:[ResetpassService]
})


//---------------------------------------Reset Password Component class-----------------------------//

export class ResetPasswordComponent{
	data:any={} ;
  result:any={};
  errorMsg: string;
  public word= (<any>config).reset;

  constructor(private reset:ResetpassService,private loginuser:LoginuserService,private router:Router) {}

  resetpassword(){
    console.log("in component");
    console.log("Old pass ", this.data.opass);
    this.data.Email=this.reset.getLoginUser();
    this.data.Password=this.reset.getLoginPassword();
    console.log("Email",this.data.Email);
    console.log("Password",this.data.Password);
    console.log(this.data);
    if (this.data.Password==this.data.opass) {
      console.log("inside if");
      this.reset.resetPass(this.data)
      .subscribe((res)=>{console.log("this is response",res)
        this.result=res;
        //console.log(this.result);
      },(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      })

      alert("password updated");
    }
    else{
      this.result='Email not valid';
      console.log(this.result);
      alert("old password did not match");
    }

  }


}

//-----------------------------------------------------------------------------------------------//