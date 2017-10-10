import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DeleteUserService {
	constructor(private http:Http) { }

	private url="http://localhost:8080";		//Initializing the url path

	deleteUser(data:any): Observable<any>{
		return this.http
		.post(this.url+'/deleteuser',data)		// Using http post function
		.map((res:Response)=><any>res.json())
		.catch(this._errorHandler);	//Mapping the response 
	}

	_errorHandler(error:Response) {
		return Observable.throw(error.json().error || ' error');
	}
}
