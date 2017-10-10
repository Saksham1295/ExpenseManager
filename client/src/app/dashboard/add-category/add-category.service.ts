import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AddCategoryService {

  constructor(private http: Http) { }

  //get expense category form the database
  getCategory() {           
    console.log("From service category");
    const url="http://localhost:8080/getcategory";
    return this.http
      .get(url)
      .map(res => res.json());             
  }

  // Service for deleting the card from the database
  deleteCard(data:any): Observable<any> {
     console.log("this is data in service");
    const url="http://localhost:8080/deletecategory";
    return (this.http)
      .delete(url)
      .map((res:Response)=><any>res.json());
  }
}




