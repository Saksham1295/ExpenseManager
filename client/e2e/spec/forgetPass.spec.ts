
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { browser,element,by } from 'protractor';
import { ForgetPassComponent } from '../../src/app/forget-pass/forget-pass.component';

describe('ForgetPassComponent', () => {
 
 it('should pass',function(){
   browser.get("http://localhost:4200/forgetpass");
  element(by.id('verify')).click();
  browser.pause();   

 })

});

