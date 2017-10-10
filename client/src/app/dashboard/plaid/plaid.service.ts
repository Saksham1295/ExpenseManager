import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PlaidService {

  constructor(private http:Http) { }

getaccessToken(public_token:any){
	const url="http://localhost:8080/plaidaccounts/accesstoken";
	console.log("sajdf",public_token);
	return(this.http)
	.post(url,{'public_token':public_token})
	.map(res=>{
		return res.json()
	}
	 //console.log("service ",);
		

	).catch(this._errorHandler);
}


getAccounts(access_token:any){
	console.log("inside get accounts",access_token);
	const url="http://localhost:8080/plaidaccounts/accounts";

	return(this.http)
	.post(url,{'access_token':access_token})
	.map(res=>{
		console.log("available accounts",res)
		return res.json()
	}
	 //console.log("service ",);
		

	).catch(this._errorHandler);
}


getItem(access_token:any){
	console.log("inside get accounts",access_token);
	const url="http://localhost:8080/plaidaccounts/item";

	return(this.http)
	.post(url,{'access_token':access_token})
	.map(res=>{
		console.log("Item Information",res)
		return res.json()
	}
	 //console.log("service ",);
		

	)
	.catch(this._errorHandler);
}

_errorHandler(error:Response){
		return Observable.throw(error.json().error || ' error');
	}

}
