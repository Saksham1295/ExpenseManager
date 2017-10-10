import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DisplayPlaidAccountService {

  constructor(private http:Http) { }
  headers = new Headers({ 'Authorization':localStorage.getItem("key")});
   options = new RequestOptions({ "headers": this.headers });

getDetails(email){
		console.log("This is the service",email);
		const urlGet="http://localhost:8080/transaction";
		return this.http
		.post(urlGet,{"email":email},this.options)
		.map((res:Response)=><any>res.json())
		.catch(this._errorHandler);
	}

	_errorHandler(error:Response){
		return Observable.throw(error.json().error || ' error');
	}
}
