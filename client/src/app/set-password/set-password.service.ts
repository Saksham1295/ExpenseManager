/*Created By - Prerna

Version - 1*/

import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MailotpService} from '../shared/mailotp.service';
/*Impoting the map*/
import 'rxjs/add/operator/map';
@Injectable()
export class SetPasswordService {
values:any;
otpvalues:any;
  constructor(private http:Http, private mailotp:MailotpService) { }
  getValues(){
    return this.otpvalues=this.mailotp.email;
   
  }
changePassword(values):Observable<any>{
    console.log(values, values.password);
   const url="http://localhost:8080/forget";      //Setting the url
    return(this.http)
    .put(url,values)        //Calling the http request
    .map((res:Response)=>        //Mapping the response
    res.json()
    )
   .catch(this._errorHandler);
  }
  _errorHandler(error:Response){
    return Observable.throw(error.json().error || ' error');
  }
}