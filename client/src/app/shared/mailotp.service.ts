import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/forkJoin';

@Injectable()

export class MailotpService {

  url:any="http://localhost:8080/verify/";

  component:string;

  email:any;

  constructor(private http: Http) { }

  public sendMailOTP(Email, subject, component): Observable<any>{

   

    console.log(Email + "from service " + this.url);

    const obj:any={'email':Email, 'content': subject};

    this.component=component;

    this.email=Email;

    console.log(this.email, 1);

    console.log("FROM SERVICE MAILOTP"+ this.component)

    return  this.http.post(this.url+"send",obj).map(res=>{  

      console.log(res)

      return res;

    }).catch(this._errorHandler);

                      

  }

  public checkOTP(otp): Observable<any>{

   

    

    const obj:any={'token':otp};

    return  this.http.post(this.url+"get/",obj).map(res=>{  

      console.log(res);

      return res;

    }).catch(this._errorHandler);

                      

  }
  _errorHandler(error:Response){
    console.error(error);
    return Observable.throw(error.json().error || ' error');  
  }


}