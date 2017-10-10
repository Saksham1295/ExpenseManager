import { Component, OnInit, Input } from '@angular/core';
import { PlaidService } from './plaid.service';
import {LoginuserService} from './../../shared/loginuser.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-plaid',
  templateUrl: './plaid.component.html',
  styleUrls: ['./plaid.component.css']
})

export class PlaidComponent implements OnInit{
 
  public_token:any;
  access_token:any;
  Item_ID:any;
  Accounts:any;
  userEmail:string;
  errorMsg:string;
  
  constructor(private plaidService: PlaidService,private loginUserService:LoginuserService, private router : Router) {

 }

 ngOnInit(){
 
  	this.public_token=localStorage.getItem("public_token");
    localStorage.removeItem("public_token");
if(this.loginUserService.getLoginUser()){
    this.userEmail=this.loginUserService.getLoginUser();
    localStorage.setItem("email",this.userEmail);
}
    console.log("value stord in variable hhhh: ",this.public_token); 
    if(this.public_token!=undefined)
    {
       console.log("this.getAccess");
       console.log("get ",this.public_token);
    	 this.getAccessToken();
       let email=localStorage.getItem("email");
       this.loginUserService.setLoginUser(email);
       localStorage.removeItem("email");

    }
 }



  getAccessToken(){
 console.log("inside get access token ",this.public_token);
 this.plaidService.getaccessToken(this.public_token)
 .subscribe((res)=>{
 	 this.access_token=res["Access Token"];
   this.Item_ID=res.Item_ID;
   console.log("Access Token:",res["Access Token"]);
 	 console.log("Item_ID:",res.Item_ID);
   },(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      });
 }

getAccounts(){

  console.log("inside get Accounts ",this.access_token);
 this.plaidService.getAccounts(this.access_token)
 .subscribe((res)=>{
 
 this.Accounts=res; 
 console.log("these are cards",res);


},(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      });


}

getItem(){

  console.log("inside get Accounts ",this.access_token);
 this.plaidService.getItem(this.access_token)
 .subscribe((res)=>{
  
 console.log("Item details",res);
},(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      });


}




// getItem(){

//   console.log("inside get Accounts ",this.access_token);
//  this.plaidService.getAccounts(this.access_token)
//  .subscribe((res)=>{
  
//  console.log("these are cards",res);
// });


// }





}