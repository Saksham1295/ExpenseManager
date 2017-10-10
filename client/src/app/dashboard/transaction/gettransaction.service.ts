import { Injectable } from '@angular/core';

import { Http, Response,RequestOptions,Headers } from '@angular/http';

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';

import { MailerService } from '../../shared/mailer.service';

@Injectable()

export class GettransactionService {

  email:String;
  headers = new Headers({ 'Authorization':localStorage.getItem("key")});
   options = new RequestOptions({ "headers": this.headers });

  constructor(private http:Http,private budgetMail:MailerService) { }

  getTransactions(email){

    const getUrl="http://localhost:8080/transaction";

    return this.http

    .post(getUrl,{"email":email},this.options)

    .map((res:Response)=>res.json());

  }

sendEmail(emailInfo:any){

  console.log(222222, emailInfo.categoryName, emailInfo.categoryId);

        return  this.budgetMail.callBudgetMail(emailInfo)

         }

  updateTransactions(object){

    const updateUrl="http://localhost:8080/transaction/update/updatetransaction/"+object.transaction_id;

    return this.http

    .put(updateUrl,object,this.options)

    .map((res:Response)=>res.json());

  }

  deleteTransactions(object){

    console.log("in service",object.transaction_id);

    const deleteUrl="http://localhost:8080/transaction/"+object.transaction_id;

    return this.http

    .put(deleteUrl,object,this.options)

    .map((res)=>res.json());

  }

}