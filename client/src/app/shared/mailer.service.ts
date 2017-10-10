/*Ipporting the services*/
import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import * as moment from 'moment';

@Injectable()

export class MailerService {
/*Declaring the global variables*/
headers = new Headers({ 'Authorization':localStorage.getItem("key")});
   options = new RequestOptions({ "headers": this.headers });
    public transactionDataJson:any;
    public categoryDataJson:any;
    public totaltransactionDataJson:any;
    expenses:number=0;
    totalexpenses:number=0;
    categoryBudget:number=0;
    totalBudget:number=0;
    url:any="http://localhost:8080/mailer";
    email:any;
    component:any;
    obj:any;
    alert:boolean=false;
    constructor(private http: Http, private router:Router) { }
/*Method calling for fetching user values from database*/
    getValues(email){
        const urlGet="http://localhost:8080/transaction";
        return this.http    //Calling the http request
        .post(urlGet,{"email":email},this.options)
        .map((res:Response)=><any>res.json());
    }
/*Method for sending budget for category overshoot*/
    public sendBudgetMail(emailInfo, subject, component): Observable<any>{
/*Intializing message in varibale*/
        let message="You have overshot your budget for "+emailInfo.category+" in month "+moment(emailInfo.date).format('MM-YYYY')+". Your budget was set to "+emailInfo.categoryBudget+" and your total expense is "+emailInfo.expenses+" ."
/*Initializing the variables in object to send in mail*/
        const obj:any={'email':emailInfo.email, 'subject': subject, 'content':message};
/*Setting the email and component value as global*/
        this.email = emailInfo.email, this.component = component;
/*Calling the http method*/
        return  this.http
        .post(this.url,obj).map((res)=>{  
            return res;
        }).catch(error=>{
            return Observable.throw(error.json().error || ' error');
        });
    }
/*Method for sending mail for Total budget overshoot*/
    public sendTotalBudgetMail(emailInfo, subject, component): Observable<any>{
/*Intializing message in varibale*/
        let message="You have overshot your overall budget in month "+moment(emailInfo.date).format('MM-YYYY')+". Your budget was set to "+emailInfo.totalBudget+" and your total expense is "+emailInfo.totalexpenses+" ."
/*Initializing the variables in object to send in mail*/
        const obj:any={'email':emailInfo.email, 'subject': subject, 'content':message};
/*Setting the email and component value as global*/
        this.email = emailInfo.email, this.component = component;
/*Calling the http method*/
        return  this.http
        .post(this.url,obj).map((res)=>{  
            return res;
        }).catch(error=>{
            console.error(error);
            return Observable.throw(error.json().error || ' error');
        });
    }
/*Method for comparing budget and expense and trigger mail sending method*/
    callBudgetMail(emailInfo){
/*Calling of method to fetch user values from database*/
        this.getValues(emailInfo.email)
        .subscribe((result)=>{
/*Initializing the values in a variable*/
            this.transactionDataJson = result[0].transaction;
            this.categoryDataJson = result[0].category;
            this.totaltransactionDataJson = result[0].transaction;
/*Calling the map function in variable*/
            this.categoryDataJson.map((category)=>{
/*Adding the total budget*/
            this.totalBudget+=category.budget;
/*Comparing the category id and assign budget to variable*/
                if(emailInfo.categoryId==category.categoryId)
                    this.categoryBudget=category.budget;
            })
/*Calling the map function in variable*/
            this.transactionDataJson.map((element)=>{
/*Matching the month and category*/
                if((moment(emailInfo.date).format('MM-YYYY'))===(moment(element.date).format('MM-YYYY'))
                    &&(element.categoryId === emailInfo.categoryId)){
/*Adding the expense*/
                this.expenses += element.expense;
            }
        })
/*Comparing the expense and budget*/
            if(this.expenses>=this.categoryBudget){
                this.alert=true;
/*Declaring and Initializing variable with values*/
                let sendemail:any={};
                sendemail.expenses=this.expenses;
                sendemail.categoryBudget=this.categoryBudget;
                sendemail.category=emailInfo.categoryName;
                sendemail.email=emailInfo.email;
/*Calling Mail sending method*/
                this.sendBudgetMail(sendemail, "Budget Overshoot Alert","dashboard")
                .subscribe((res)=>{
/*Reinitializing the variable*/
                 res})
            }else{
                console.log("fail")
            }
/*Calling the map function in variable*/
            this.totaltransactionDataJson.map((element)=>{
/*Matching the month*/
                if((moment(emailInfo.date).format('MM-YYYY'))===(moment(element.date).format('MM-YYYY'))){
/*Adding the expense*/
                    this.totalexpenses += element.expense;
                }
            })
/*Comparing the expense and budget*/
            if(this.totalexpenses>=this.totalBudget){
                this.alert=true;
/*Declaring and Initializing variable with values*/
                let sendemail:any={};
                sendemail.totalexpenses=this.totalexpenses;
                sendemail.totalBudget=this.totalBudget;
                sendemail.email=emailInfo.email;
/*Calling Mail sending method*/
                this.sendTotalBudgetMail(sendemail, "Budget Overshoot Alert","dashboard")
                .subscribe((res)=>{
/*console.log(res,'total res')
                    this.totalBudget=0;
                    this.totalexpenses=0;
console.log("expense second", this.totalBudget, this.totalexpenses)
*/                    
                res})
            }else{
            }
       this.expenses=0;
       this.categoryBudget=0;
       this.totalexpenses=0;
       this.totalBudget=0; 
if(this.alert==true){
    swal('info, "You have overshoot your budget', 'info')
this.alert=false;
}else{
    swal('info', "Your changes are saved successfully")
}
})
/*Calling the navigate methods*/
//       this.router.navigate(['/dashboard/transaction'])
    }
    }

