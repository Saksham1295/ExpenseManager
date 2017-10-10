
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { browser,element,by } from 'protractor';
import { AccountComponent } from '../../src/app/dashboard/account/account.component';

describe('AccountComponent', () => {
 
 it('should pass',function(){
   browser.get("http://localhost:4200/dashboard/Account");
    element(by.id('delAcc')).click();
   browser.pause();   

 })

})
