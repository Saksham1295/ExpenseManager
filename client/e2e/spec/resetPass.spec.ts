
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { browser,element,by } from 'protractor';
import { ResetPasswordComponent } from '../../src/app/dashboard/reset-password/reset-password.component';

describe('ResetPasswordComponent', () => {

it('should pass',function(){
  browser.get("http://localhost:4200/dashboard/reset");

  element(by.name('opass')).sendKeys(343432);
  element(by.name('npass')).sendKeys(45234);
  element(by.name('cpass')).sendKeys(45234);
  element(by.id('reset')).click();
  browser.pause();  

})

});

