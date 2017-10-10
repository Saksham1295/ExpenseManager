import { Component, OnInit } from '@angular/core';

import { SetPasswordService } from './set-password.service';

import { Router } from '@angular/router';

/*Importing MailotpService*/

import { MailotpService} from '../shared/mailotp.service';

import {FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

import * as config from '../config/multi_en_config.json';

import { User } from '../User';

@Component({

  selector: 'app-set-password',

  templateUrl: './set-password.component.html',

  styleUrls: ['./set-password.component.css'],

  providers: [SetPasswordService]

})

export class SetPasswordComponent implements OnInit {

  /*Initializing global variables*/

  info:any={};

  change:any;

  data:any;

  //new:any;

  values:any={};

  otpvalues:any;

  user: User;

  value:any;

  errorMsg: string;

  public word= (<any>config).setPassword;

  constructor(private setPassword:SetPasswordService,

    private router:Router, private mailotp:MailotpService) { }

  changePassword(info:any){

    /*Initializing values into other variable*/

    console.log(1, info, info.password);

    this.values.email=this.otpvalues;

    this.values.password=this.info.password;

console.log(this.values,"telllllllllll");

    this.setPassword.changePassword(this.values)    //calling function from Service

    .subscribe((res)=>{

      this.value=res;

      console.log(res, "whegfsdcu bjdscbjds");

      if(res.length!==0){    //Checking the response

      alert("Password updated. Please login");

      //this.router.navigate(['/login']);

      res}else{

        alert("Password not updated, Kindly update");

      }

      this.router.navigate(['/login']);

    },(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      });      // Subscribing the result

  }

  save(model: User, isValid: boolean) {

    // call API to save customer

    console.log(model, isValid);

  }

getValues(){

  this.otpvalues=this.setPassword.getValues();

}

  ngOnInit() {

    this.getValues()

    // initialize model here

    this.user = {

      Password: '',

      ConfirmPassword:''

    }

  }

}