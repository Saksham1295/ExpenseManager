
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { browser,element,by } from 'protractor';
import { LoginComponent } from '../../src/app/login/login.component';

describe('LoginComponent', () => {
 
 it('should pass',function(){
   browser.get("http://localhost:4200/login");

   element(by.name('email')).sendKeys('shefalisingh51@gmail.com');
   element(by.name('password')).sendKeys('shefali');
   expect(element(by.id('login')).getText()).toEqual("Login");
   element(by.id('login')).click();
   expect(element(by.id('register')).getText()).toEqual("Register");
   element(by.id('register')).click();
   browser.pause();   

 })

});
