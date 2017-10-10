import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CreditService {

  constructor(private http: Http) { }

//activate or deactivate tracking of credit card
toggle(active): Observable<any> {
		const url="http://localhost:8080/card/addflag";
		console.log(active);
		return this.http
               .post(url,active)
               .map(res =>res.json());
	}
}
