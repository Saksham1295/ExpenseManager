/* 

Name:Nikhil Gupta
Date last modified :29/09/17

*/


//------------------------------------------imported files--------------------------------------------//

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {LoginuserService} from '../../shared/loginuser.service';
import { Component, OnInit } from '@angular/core';
import {ResetpassService} from './resetpass.service';
import * as config from '../../config/multi_en_config.json';
import * as conf from './ResetPasswordComponent.test.config.json';
import { async } from '@angular/core/testing';
import{ResetPasswordComponent} from './reset-password.component';
import {ComponentFixture,TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import 'rxjs/add/observable/of';

//---------------------------------------------------------------------------------------------------//


//----------------------------------------declared variables-----------------------------------------//


describe('ResetPasswordComponent...............only',()=>{
  let spy:any;
  let word= (<any>conf).reset;
  let fixture:ComponentFixture<ResetPasswordComponent>;
  let comp:ResetPasswordComponent;
  let de:DebugElement;
  let el:HTMLElement;
  let foo;
  let service:ResetpassService;
  let response:any;
  let responsefail:any;
  let data:any;


//--------------------------------------------------------------------------------------------------//


//-------------------------------------------async before each--------------------------------------//  
 
  beforeEach(async(()=>{


    foo = {
      getLoginUserStub:function(){

      },
      getLoginPasswordStub:function(){

      }

    }

    response={ok:'1', nModified: '1', n: '1'};
    responsefail='Email not valid';
    data={
      "Email":"nishannt@gmail.com","Password":"1234","opass":"1234","cpass":"1234","newpass":"1234"
    }


    TestBed.configureTestingModule({
      declarations:[ResetPasswordComponent],
      imports:[BrowserModule,FormsModule,HttpModule],
      providers:[ LoginuserService,ResetpassService]
    })
    .compileComponents();
  }));


//---------------------------------------------------------------------------------------------------//
  

//-----------------------------------------synchronous before each-----------------------------------// 
  beforeEach(()=>{
    fixture=TestBed.createComponent(ResetPasswordComponent);
    comp=fixture.componentInstance;
    service=fixture.debugElement.injector.get(ResetpassService);

  })

//---------------------------------------------------------------------------------------------------//



//-----------------------------------------positive test case---------------------------------------//

  it("tracks that the spy of resetpassword method was called and returns the correct response",()=>{


    spy=spyOn(service,'getLoginUser').and.returnValue(word.Email);
    fixture.detectChanges();
    spy=spyOn(service,'getLoginPassword').and.returnValue(word.Password);
    fixture.detectChanges();

    spy=spyOn(service,'resetPass').and.returnValue(Observable.of(response));
    fixture.detectChanges();
    comp.data={"opass":"1234","cpass":"1234","npass":"1234"};
    comp.resetpassword();
    fixture.detectChanges();
    console.log("this is spec",comp.result);

    expect(comp.result).toEqual(response);
  });


//--------------------------------------------------------------------------------------------------//


//--------------------------------------negative test case-----------------------------------------//

  it("tracks that the spy of resetpassword method was called and wrong old password was given resulting to wrong response",()=>{
    

    spy=spyOn(service,'getLoginUser').and.returnValue(word.Email);
    fixture.detectChanges();
    spy=spyOn(service,'getLoginPassword').and.returnValue(word.Password);
    fixture.detectChanges();

    spy=spyOn(service,'resetPass').and.returnValue(Observable.of(response));
    fixture.detectChanges();
    comp.data={"opass":"123","cpass":"1234","npass":"1234"};
    comp.resetpassword();
    fixture.detectChanges();
    console.log("this is spec fail",comp.result);

    expect(comp.result).toEqual(responsefail);
  });


//--------------------------------------------------------------------------------------------------//

//--------------------------------------positive test case-----------------------------------------//

  // it('should display reset title',async(()=>{

  //   const fixture=TestBed.createComponent(ResetPasswordComponent);

  //   de=fixture.debugElement.query(By.css('reset'));
  //   el=de.nativeElement;
  //   fixture.detectChanges();

  //   //const compiled=fixture.debugElement.nativeElement;
  //   //de=fixture.debugElement.query(By.css('.reset'));
  //   //el=de.nativeElement;


  //   const content=el.textContent;

  //   expect(content).toContain(word.heading);

  // })


  // );
//--------------------------------------------------------------------------------------------------//


});



