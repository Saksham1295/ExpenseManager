import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class PlaidAccountsService {

  constructor(private http:Http) { }

  addAccount(account){
  		const url="http://localhost:8080/account/addaccount";
	return(this.http)
	.post(url,account)
	.map(res=>res.json())
	.catch(this._errorHandler);
	 //console.log("service ",);
  }

  _errorHandler(error: Response){
  	return Observable.throw(error.json().error || ' error');
  }

}
