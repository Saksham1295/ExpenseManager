/*Made By:- Prerna Thanai*/


//----------------------------------------imported files---------------------------------------------//

import { Component } from '@angular/core';
import { ForgetPassService } from './forget-pass.service';
import { Router } from '@angular/router';
import * as config from '../config/multi_en_config.json';
import { Directive, forwardRef, 
    Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
    import { NG_VALIDATORS,Validator,
        Validators,AbstractControl,ValidatorFn } from '@angular/forms';


//---------------------------------------------------------------------------------------------------//
   
        @Component({
            selector: 'app-forget-pass',
            templateUrl: './forget-pass.component.html',
            styleUrls: ['./forget-pass.component.css'],
            providers: [ForgetPassService]      //Using ForgetPassService
        })


//------------------------------------Forgrt Password Class------------------------------------------//        
        export class ForgetPassComponent {
            //Initializing global varibales
            data:any={};
            verify:any;
            email:any;
            values:any={};
            otp:any;
            result:any;
            public word= (<any>config).forgetPass;
            constructor(private forgetUser:ForgetPassService,private router:Router) { }
            verifyEmail(email){
            console.log(email);
                this.forgetUser.verifyEmail(email)
                .subscribe((res)=>{
                    this.values=res;
                    console.log(this.values);
                    if(this.email==0)      //Checking condition on response
                    {
                        alert("Email not valid. Please re-enter or register");
                    }else{
                        this.result=this.forgetUser.verifyData(this.values[0]);
                    };
                });
            }
        }

//--------------------------------------------------------------------------------------------------//