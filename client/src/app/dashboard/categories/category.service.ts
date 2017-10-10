 import { Injectable } from '@angular/core';

 import { Http, Response,RequestOptions,Headers } from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

 import { MailerService } from '../../shared/mailer.service';

 @Injectable()

 export class CategoryService {

    email:any;
    headers = new Headers({ 'Authorization':localStorage.getItem("key")});
   options = new RequestOptions({ "headers": this.headers });

    constructor(private http: Http,private budgetMail:MailerService) { 

    }

    //Adding the category

    addCategory(data){

        console.log("service method");

        const url="http://localhost:8080/category/addcategory";

        return this.http

        .post(url,data,this.options)

        .map((res)=>res.json())
        .catch(this._errorHandler);

    }

    //getting the category

    getCategory(data){

        const url="http://localhost:8080/category/getcategory";

        return this.http

        .post(url,data,this.options)

        .map((res)=>

            res.json())
        .catch(this._errorHandler);

    }

    //deleting the category

    deleteCategory(data){

        const url="http://localhost:8080/category/deletecategory/"+data.categoryId;

        return this.http

        .put(url,data,this.options)

        .map((res)=>res.json())
        .catch(this._errorHandler);

    }

    sendEmail(emailInfo:any){

        console.log(222222, emailInfo.categoryName, emailInfo.categoryId);

        return  this.budgetMail.callBudgetMail(emailInfo)

    }

    //updating the category

    updateCategory(data){

        const url="http://localhost:8080/category/updatecategory/"+data.categoryId;

        return this.http

        .put(url,data,this.options)

        .map((res)=>res.json())
        .catch(this._errorHandler);

    }

     _errorHandler(error:Response){
        return Observable.throw(error.json().error || ' error');
    }

 }