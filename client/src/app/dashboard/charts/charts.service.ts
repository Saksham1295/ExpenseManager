import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetJSON{

	 obj:any;
    constructor(private http: Http) { }

    public getJSON(filetitle:string): Observable<any> {
         return this.http.get("../../assets/"+filetitle+".json")
                         .map((res:any) => {return res.json().data});               

     }
}