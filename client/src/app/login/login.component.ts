import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';

import { Router } from '@angular/router';

import {LoginuserService} from '../shared/loginuser.service';

import * as config from '../config/multi_en_config.json';

 // const word = (<any>config).login;

@Component({

    selector: 'app-login',

    templateUrl: './login.component.html',

    styleUrls: ['./login.component.css'],

    providers: [LoginService]

})

export class LoginComponent  implements OnInit{

     /*Declaring the global Variables*/

    data:any={};

    info:any={};

    errorMsg: string;

    public word= (<any>config).login;

    constructor(private loginUser:LoginService, private router:Router,private userlogin:LoginuserService) { }

    

    ngOnInit(){ }

    

     /*Calling the Method from Service*/

    login()

    {

    this.userlogin.setLoginUser(this.data.email);

    console.log("this is get",this.userlogin.getLoginUser());

        this.userlogin.setLoginPassword(this.data.password);

        this.loginUser.login(this.data)

        .subscribe((result)=>{


            console.log("Inside comp",result);

            if(result.success==false)

            {

                window.alert("Wrong password");

                console.log("wrong");

            }

            else if(result.success==true){

                //window.alert("Wrong password");
                localStorage.setItem("key",result.token);
                this.router.navigateByUrl('/dashboard');

            }

            else if(result.error=="user not found"){

                console.log("email not found");

            }

        },(dataError)=>{this.errorMsg=dataError;
                this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
                
            });

        

    }

    

}