

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { browser,element,by } from 'protractor';
import { RegisterComponent } from '../../src/app/register/register.component';

describe('RegisterComponent', () => {
 
 it('should pass',function(){
   browser.get("http://localhost:4200/register");
   element(by.name('fullname')).sendKeys('Rumani');
   element(by.name('email')).sendKeys('shefalisingh51@gmail.com');
   element(by.name('password')).sendKeys('shefali');
   element(by.name('confirm')).sendKeys('shefali');
   element(by.name('mobilenumber')).sendKeys('8989941745');
   element(by.name('DOB')).sendKeys('11/01/1996');
  element(by.id('reg')).click();
   browser.pause();   

 })

});

