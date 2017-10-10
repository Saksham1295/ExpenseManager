import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class AccountService {
	constructor(private http: Http){ }
	headers = new Headers({ 'Authorization':localStorage.getItem("key")});
   options = new RequestOptions({ "headers": this.headers });

	/*fetching details of account*/
	getAccount(email){
		console.log("From service add account",email);
		const url="http://localhost:8080/transaction";
		return this.http
		.post(url,{"email":email},this.options)
		.map((res)=>res.json())
		.catch(this._errorHandler);
	}
	/*	deleting account*/
	deleteAccount(email){
		const url="http://localhost:8080/deleteuser";
		return this.http.post(url,{"email":email},this.options)
		.map((res)=>res.json())
		.catch(this._errorHandler);
	}
	_errorHandler(error:Response){
		return Observable.throw(error.json().error || ' error');
	}
}

