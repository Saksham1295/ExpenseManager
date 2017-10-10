/* 

Name:Nikhil Gupta
Date last modified :29/09/17

*/


//----------------------------------------imported files---------------------------------------------//

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {LoginuserService} from '../../shared/loginuser.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

//--------------------------------------------------------------------------------------------------//


//----------------------------------------Resetpass Service class-----------------------------------//

@Injectable()
export class ResetpassService {

	constructor(private http:Http,private loginservice:LoginuserService){}

	getLoginUser(){
		return this.loginservice.getLoginUser();

	}

	getLoginPassword(){
		console.log("this is service of component");
		return this.loginservice.getLoginPassword();
	}

	resetPass(data:any)

	{
		const url="http://localhost:8080/reset";
		return this.http
		.post(url,data)
		.map((res)=>res.json())
		.catch(this._errorHandler);
	}

	_errorHandler(error: Response){
  	return Observable.throw(error.json().error || ' error');
  }


}

//--------------------------------------------------------------------------------------------------//