/*Created By - Prerna
Version - 1*/

//----------------------------------------imported files---------------------------------------------//

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { MailotpService } from '../shared/mailotp.service';
import { Router } from '@angular/router';

//--------------------------------------------------------------------------------------------------//


//----------------------------------------Reset Password Service------------------------------------//
@Injectable()
export class ForgetPassService {
  //Initializing global variable
  constructor(private http:Http,private mailotp:MailotpService,private router:Router) { }
  result:any;
  values:any;
  verifyEmail(info:any): Observable<any>{
  console.log(info, "check");
    const url="http://localhost:8080/forget";   //Initializing the Url 
    return (this.http)
    .post(url,info)    //Calling the http function
    .map((res:Response)=>   //Mapping the response
    res.json()
  );
  }
  verifyData(result:any){
    console.log(result);
        return  this.mailotp.sendMailOTP(result.email, "Email Verification","setpassword")
            //Calling method of MailotpService to send OTP
            .subscribe((res)=>{this.router.navigateByUrl('/verify');
              this.values=res;})
           ;

  }

}

//-------------------------------------------------------------------------------------------------//