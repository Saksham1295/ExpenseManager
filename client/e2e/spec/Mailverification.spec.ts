

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { browser,element,by } from 'protractor';
import { MailverificationComponent } from '../../src/app/mailverification/mailverification.component';

describe('MailverificationComponent', () => {
 
 it('should pass',function(){
   browser.get("http://localhost:4200/verify");
   element(by.name('email')).sendKeys('123456');
    element(by.id('login')).click();
   browser.pause();   

 })

});


