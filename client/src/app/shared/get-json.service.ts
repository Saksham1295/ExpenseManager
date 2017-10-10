import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetJSONService{

	 obj:any;
	 headers = new Headers({ 'Authorization':localStorage.getItem("key")});
   options = new RequestOptions({ "headers": this.headers });
    constructor(private http: Http) { }

    public getJSONS(email:string): Observable<any> {
         return this.http.post("http://localhost:8080/transaction",{"email":email},this.options)
                         .map((res:any) => {//console.log(res._body);
                         	
                         	return res.json()})
                         .catch(this._errorHandler);               

     }
     _errorHandler(error: Response){
         return Observable.throw(error.json().error || ' error');
     }
}