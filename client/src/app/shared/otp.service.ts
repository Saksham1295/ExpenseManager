import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OtpService {

  
    constructor(private http: Http) { }

    public sendOTP(email): Observable<any> {
console.log(email);
const obj:any={reciever:email, subject: "OTP"};
const url="http://localhost:8080/verify/send";

    	  return (this.http)
    
    .post(url,obj)
    .map((res:Response)=>{
      console.log(res.json());
   
        
      
    });

          // return this.http.post("http://localhost:3003/verify/send",{reciever:email, subject: "OTP"})
          // 				.map((res)=>{console.log(res.json());return res.json()});
          //                ;               

     }



    // public verifyOTP(otprecieved): Observable<any> {
    //      return this.http.post("http://localhost:3003/verify/get",{token:otprecieved})
    //                      .map((res:any) => {console.log(res.json()); res.json()});               

    //  }

}
