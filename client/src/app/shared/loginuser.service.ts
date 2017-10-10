import { Component, Input } from '@angular/core';

import { Injectable }     from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';

@Injectable()

export class LoginuserService {

  constructor() { }

private loginUser:any = "";

private loginPassword:any = "";

getLoginUser(){

    

    return this.loginUser;

};

setLoginUser(user:any){

    this.loginUser = user;

};

getLoginPassword(){

    console.log("this is service of global");

    return this.loginPassword;

};

setLoginPassword(pass:any){

    this.loginPassword = pass;

};

}

