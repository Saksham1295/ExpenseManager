import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { MailotpService} from '../shared/mailotp.service';

import { RegisterService } from '../shared/register.service';

@Component({

  selector: 'app-mailverification',

  templateUrl: './mailverification.component.html',

  styleUrls: ['./mailverification.component.css']

})

export class MailverificationComponent implements OnInit {

  constructor(private router:Router,private mailotp:MailotpService,private registerUser:RegisterService,) { }

  valid:boolean = false;
  errorMsg: string;
  verify(otp){

   this.mailotp.checkOTP(otp).subscribe(res=>{

     this.valid=res._body; console.log(this.valid+" "+res._body)

     if(res._body=='true')

     {

       alert("Verification success!");

       let comp = this.mailotp.component;

       console.log("FROM MAIL VERIFICATION  COMP" + comp);

       if(comp==="login"){

       this.registerUser.register().subscribe(

         (res)=>{

           console.log("response!!!!!!!",res)

           if(res.length>0){

            this.router.navigateByUrl("/"+comp);

          }else{

             this.router.navigateByUrl('/register');

          }

         },(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      });

     }else if(comp==="setpassword"){

       this.router.navigateByUrl("/setpassword");

       

     }else{console.log("No Path to go to")}

     }

   else

   {

     alert("Registeration Incomplete, try again?");

     this.router.navigateByUrl('/register');

   }    },(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      });

   

 }

  ngOnInit() {

  }

}