import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { MailerService } from '../../shared/mailer.service';

@Injectable()
export class AddTransactionService {
    account_id:any;
    category_id:any;
    email:String;
    data:any={};
    headers = new Headers({ 'Authorization':localStorage.getItem("key")});
    options = new RequestOptions({ "headers": this.headers });

  constructor(private http:Http,private budgetMail:MailerService) { }
    getIds(email){
        console.log("This is the service",email);
        const urlGet="http://localhost:8080/transaction";
        return this.http
        .post(urlGet,{"email":email},this.options)
        .map((res:Response)=><any>res.json())
        .catch(this._errorHandler);
    }
sendEmail(emailInfo:any){
        return  this.budgetMail.callBudgetMail(emailInfo)
         }
    addTransaction(account_id,category_id,data){
            console.log("This is the add Transaction");
            console.log("This is description in service",data.description);
            console.log("This is expense in service",data.expense);
            const urlAdd="http://localhost:8080/transaction/"+account_id+"/"+category_id;
            //const urlAdd="http://localhost:8080/transaction/123456789/9162851";
                    console.log(data);
            return this.http
    /*      .put(urlAdd+"/"+this.account_id+"/"+this.category_id,data)
    */      .put(urlAdd,data,this.options)
            .map((res:Response)=>res.json())
            .catch(this._errorHandler)
        //1983476
    }
    // addTransaction(account_id,category_id,data){
    //  console.log("This is the add Transaction");
    //  console.log("This is the service account", account_id);
    //  console.log("This is Service category id", category_id);
    //  console.log("This is description in service",data.description);
    //  console.log("This is expense in service",data.expense);
    // //   const urlAdd=;
    //  data.email=this.email;
    //  console.log("This is email",data);
    //  return this.http
    //  .put("http://localhost:8080/transaction/123456789/9162851",data)
    //  .map((res)=><any>res.json());
    // }
  getCategoryList(email){
    const getUrl="http://localhost:8080/category/getcategory";
    return this.http
        .post(getUrl,{"email":email},this.options)
        .map((res)=>res.json())
        .catch(this._errorHandler);
  }
  _errorHandler(error:Response){
        return Observable.throw(error.json().error || ' error');
    }
}