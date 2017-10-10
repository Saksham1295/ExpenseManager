import { Component, OnInit } from '@angular/core';

import { GettransactionService } from './gettransaction.service';

import {LoginuserService} from './../../shared/loginuser.service';

@Component({

  selector: 'app-transaction',

  templateUrl: './transaction.component.html',

  styleUrls: ['./transaction.component.css'],

  providers:[GettransactionService]

})

export class TransactionComponent implements OnInit {

  list:any=[];

  email:any;

  editFlag:boolean=false;

  updateData:any;

  emailInfo:any={};

  constructor(private getData:GettransactionService,private login:LoginuserService) { }

  ngOnInit(){

    this.email=this.login.getLoginUser();

    console.log("This is transaction component",this.email);

    this.getTransactionData();

  }

  getTransactionData(){

     console.log("This is the showlist Component");

     this.getData.getTransactions(this.email)

     .subscribe((result)=>{

      console.log("#########################################",result[0].transaction);

      this.list=result[0].transaction;

    })

  }

 //update category method calling service

  updateTransaction(object){

    console.log("This is update method");

    object.email=this.email;

    this.emailInfo.email=this.email;

    this.emailInfo.date=object.date;

    this.emailInfo.categoryId=object.categoryId;

    this.emailInfo.categoryName="Home";

    this.getData.updateTransactions(object)

     .subscribe((result)=>{

//      console.log("@@@@@@@@@@@@@@@@@@@@@@@@",result);

      console.log(1111);   

  console.log(this.emailInfo);

      this.getData.sendEmail(this.emailInfo)

   

      this.edit();

/*      this.emailInfo.email=this.editDetails.email;

      this.emailInfo.date=this.editDetails.date;

      this.emailInfo.categoryId=this.editDetails.category_id;

      this.emailInfo.categoryName=this.categoryName;

*/    //this.list=result[0].transaction;

    });

  }

  deleteTransaction(object){

    console.log("This is Delete method",object);

    object.email=this.email;

    this.getData.deleteTransactions(object)

     .subscribe((result)=>{

      console.log("*********************************************",result);

      this.getTransactionData();

    });

  }

          edit(){

            this.editFlag=!this.editFlag;

        }

}