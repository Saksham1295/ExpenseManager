import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()



export class UserSignedOut {

private isSignedOut;

constructor(){

}

getSignedOut(){
	localStorage.removeItem('key');
	return this.isSignedOut=true;

}
}
