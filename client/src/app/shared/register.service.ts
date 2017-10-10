import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RegisterService {
data: any;
  constructor(private http: Http) { }


public tempUser(info:any){
this.data = info;
console.log(this.data);

}
public register(): Observable<any>{
	//let d = localStorage.getItem('tempuser.Email')
	console.log(this.data.Email)
	const url="http://localhost:8080/register";
	return this.http
	.post(url,this.data)
	.map((res:Response)=><any>res.json())
	.catch(this._errorHandler);
}
_errorHandler(error:Response){
    console.error(error);
    return Observable.throw(error.json().error || ' error');  
  }
}
