import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Router } from '@angular/router';

@Injectable()
export class CardSettingService {
     
 constructor(private http:Http, private router:Router) { }
// adding category in dashboard
addCategory(data:any){
	console.log("From service",data);
	const url="http://localhost:8080/addcategory";
	return this.http
	.post(url,data)
	.map((res:Response)=><any>res.json());
	}
	//  method for editing category
editCard(data:any): Observable<any>{

	console.log(data.category+" "+data.budget+" "+data.spent);
const url="http://localhost:8080/editcard/";
	return this.http
	.put(url,data)
	.map((res)=>{
		if(res.json!=undefined){
			alert("Card Details updated");
			window.location.reload();
		}
	});
}


}
