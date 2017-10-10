import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()
export class CardManagerService {

  constructor(private http: Http){ }

//addCard method calls the backend api to add card
addCard(data:any){
	const url="http://localhost:8080/card/addcard";
	return this.http
	.post(url,data)
	.map((res:Response)=><any>res.json());
	}

//getCard method calls the backend api to get card
	getData(){
		let email=localStorage.getItem('email');
		const url="http://localhost:8080/card/getcard";
    return this.http
    .post(url,{"Email":email})
    .map((res:Response) => <any>res.json());       
	}
}

