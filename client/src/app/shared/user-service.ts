import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()



export class UserService {
private isUserLoggedIn;

constructor(){
	console.log(localStorage.getItem('key'));
	if(localStorage.getItem('key')!==null){
	this.isUserLoggedIn=true;
	console.log(this.isUserLoggedIn,  "check true");
}else{
	this.isUserLoggedIn=false;
	console.log(this.isUserLoggedIn, "check false");
}

//this.isUserLoggedIn=true;
}
  /*isLoggedIn(): boolean {
  	console.log("In user service**************8");
  	console.log(localStorage.getItem);
  	if(localStorage.getItem('key')!==undefined){
  		console.log("true value is here");
    return true;
}else{

  		console.log("fase value is here");
	return false;
  }
}*/

getUserLoggedIn(){
	return this.isUserLoggedIn;
}
}
