import { Component, OnInit } from '@angular/core';
import { AddTransactionService } from './add-transaction.service';
import {LoginuserService} from './../../shared/loginuser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css'],
  providers:[AddTransactionService]
})
export class AddTransactionComponent implements OnInit {
  data:any={};
  account_id:any;
  category_id:any;
  email:any;
  result:any;
  accountObject:any;
  categoryObject:any=[];
  emailInfo:any={};
  categoryName:any;
  date:any;
  errorMsg:string;
  constructor(private addTransact:AddTransactionService,private login:LoginuserService,private router:Router) { }
  ngOnInit() {
    console.log("thidsss",this.login.getLoginUser());
    this.email=this.login.getLoginUser();
    this.getData();
    this.getCategoryList();
  }
  getData(){
    console.log("This is Get Data");
    // this.getLoginUser();
    this.addTransact.getIds(this.email)
    .subscribe((result)=>{
    console.log("this is response",result);
    //this.account_id=result[0].account[0].account_id;
    this.accountObject=result[0].account;
    console.log(this.accountObject);
    //console.log("##############",this.accountObject[0].name)
    // console.log("This is the account id",this.account_id);
    // this.category_id=result[0].category[0].categoryId;
    // console.log("This is the category id",this.category_id);
  },(dataError)=>{this.errorMsg=dataError;
       this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
    
      })
  }
  onSelect(categoryId,categoryName)
  {
     this.category_id=categoryId;
     this.categoryName=categoryName;
  }
  onSelectAccount(account_id)
  {
    this.account_id=account_id;
  }
  addTransactionComp(data){
    console.log("This is addTransactionComp", data)
    console.log("This is Add Transaction",this.account_id);
    data.email=this.email;
    this.date=data.date;
    console.log("Name 1",this.categoryName);
/*    transactionDetails.date=data.date;
    transactionDetails.categoryid=this.category_id;
*/    this.addTransact.addTransaction(this.account_id,this.category_id,data)
    .subscribe((result)=>{
      //this.result=result;
    console.log("Name 2",this.categoryName);
            this.emailInfo.email=this.email;
      this.emailInfo.date=this.date;
      this.emailInfo.categoryId=this.category_id;
      this.emailInfo.categoryName=this.categoryName;
      console.log(this.emailInfo);
      this.addTransact.sendEmail(this.emailInfo)
    },(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
       
      })
  }
   getCategoryList(){
    console.log("This is the showlist Component");
     this.addTransact.getCategoryList(this.email)
    .subscribe((result)=>{
         this.categoryObject=result;
      console.log("responseeeeeeeee" ,result);
    console.log("respone" ,this.categoryObject);
    },(dataError)=>{this.errorMsg=dataError;
       this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
       
     })
  }

}